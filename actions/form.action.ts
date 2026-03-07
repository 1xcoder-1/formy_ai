"use server";

import { FormWithSettings } from "@/@types/form.type";
import { defaultBackgroundColor, defaultPrimaryColor } from "@/constant";
import { generateUniqueId } from "@/lib/helper";
import { prisma } from "@/lib/prismadb";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function fetchFormStats() {
  try {
    const session = getKindeServerSession();
    const user = await session.getUser();

    if (!user) {
      return {
        success: false,
        message: "Unauthorized to use this resource",
      };
    }

    const { _sum, _count } = await prisma.form.aggregate({
      where: { userId: user.id },
      _sum: {
        views: true,
        responses: true,
      },
      _count: {
        id: true,
      },
    });

    const views = _sum.views ?? 0;
    const totalResponses = _sum.responses ?? 0;
    const totalForms = _count?.id ?? 0;

    const conversionRate = views > 0 ? (totalResponses / views) * 100 : 0;
    const engagementRate =
      totalForms > 0 ? (totalResponses / totalForms) * 100 : 0;

    return {
      success: true,
      views,
      totalForms,
      totalResponses,
      conversionRate,
      engagementRate,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}

export async function createForm(data: { name: string; description: string }) {
  try {
    const session = getKindeServerSession();
    const user = await session.getUser();
    if (!user) {
      return {
        success: false,
        message: "Unauthorized to use this resource",
      };
    }

    const jsonBlocks = JSON.stringify([
      {
        id: generateUniqueId(),
        blockType: "RowLayout",
        attributes: {},
        isLocked: true,
        childblocks: [
          {
            id: generateUniqueId(),
            blockType: "Heading",
            attributes: {
              label: data.name || "Untitled form",
              level: 1,
              fontSize: "4x-large",
              fontWeight: "normal",
            },
          },
          {
            id: generateUniqueId(),
            blockType: "Paragraph",
            attributes: {
              label: "Paragraph",
              text: data.description || "Add a description here.",
              fontSize: "small",
              fontWeight: "normal",
            },
          },
        ],
      },
    ]);

    const formSettings = await prisma.formSettings.create({
      data: {
        primaryColor: defaultPrimaryColor,
        backgroundColor: defaultBackgroundColor,
      },
    });

    const form = await prisma.form.create({
      data: {
        name: data.name,
        description: data.description,
        userId: user.id,
        creatorName: user?.given_name || "",
        settingsId: formSettings.id,
        jsonBlocks,
      },
    });

    if (!form) {
      return {
        success: false,
        message: "Could not create form, please try again",
      };
    }

    return {
      success: true,
      message: "Form created successfully",
      form,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}

export async function fetchAllForms() {
  try {
    const session = getKindeServerSession();
    const user = await session.getUser();

    if (!user) {
      return {
        success: false,
        message: "Unauthorized to use this resource",
      };
    }

    const form = await prisma.form.findMany({
      where: {
        userId: user.id,
      },
      include: {
        settings: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      success: true,
      message: "Form fetched successfully",
      form,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}

export async function saveForm(data: {
  formId: string;
  name?: string;
  description?: string;
  jsonBlocks: string;
}) {
  try {
    const { formId, name, description, jsonBlocks } = data;
    const session = getKindeServerSession();
    const user = await session.getUser();

    if (!user) {
      return {
        success: false,
        message: "Unauthorized to use this resource",
      };
    }

    if (!formId || !jsonBlocks) {
      return {
        success: false,
        message: "Invalid input data",
      };
    }

    const form = await prisma.form.update({
      where: { formId: formId },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        jsonBlocks,
      },
    });

    return {
      success: true,
      message: "Form updated successfully",
      form,
    };
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while updating the form",
    };
  }
}

export async function updatePublish(formId: string, published: boolean) {
  try {
    const session = getKindeServerSession();
    const user = await session.getUser();

    if (!user) {
      return {
        success: false,
        message: "Unauthorized to use this resource",
      };
    }

    if (!formId) {
      return {
        success: false,
        message: "FormId is required",
      };
    }

    const form = await prisma.form.update({
      where: { formId },
      data: { published },
    });

    return {
      success: true,
      message: `Form successfully ${published ? "published" : "unpublished"}`,
      published: form.published,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to update publish status",
    };
  }
}

export async function fetchPublishFormById(formId: string): Promise<{
  form?: FormWithSettings | null;
  success: boolean;
  message: string;
}> {
  try {
    if (!formId) {
      return {
        success: false,
        message: "FormId is required",
      };
    }
    const form = await prisma.form.findFirst({
      where: {
        formId: formId,
        published: true,
      },
      include: {
        settings: true,
      },
    });

    if (!form) {
      return {
        success: false,
        message: "Form not found",
      };
    }

    // Workaround for Prisma Client generation issues on Windows
    const rawSettings: any[] = await prisma.$queryRawUnsafe(
      `SELECT "bannerImage" FROM "FormSettings" WHERE "id" = $1`,
      form.settingsId
    );

    if (rawSettings && rawSettings.length > 0) {
      // Check both casings as Postgres might return lowercase depending on driver/quoting
      const banner = rawSettings[0].bannerImage || rawSettings[0].bannerimage;
      if (banner !== undefined) {
        (form.settings as any).bannerImage = banner;
      }
    }

    return {
      success: true,
      message: "Form fetched successfully",
      form,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}

export async function submitResponse(formId: string, response: string) {
  try {
    if (!formId) {
      return {
        success: false,
        message: "FormId is required",
      };
    }
    await prisma.form.update({
      where: {
        formId: formId,
        published: true,
      },
      data: {
        formResponses: {
          create: {
            jsonReponse: response,
          },
        },
        responses: {
          increment: 1,
        },
      },
    });
    return {
      success: true,
      message: "Response submitted",
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}

export async function fetchAllResponseByFormId(formId: string) {
  try {
    const session = getKindeServerSession();
    const user = await session.getUser();

    if (!user) {
      return {
        success: false,
        message: "Unauthorized to use this resource",
      };
    }

    const form = await prisma.form.findUnique({
      where: {
        formId: formId,
      },
      include: {
        formResponses: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    return {
      success: true,
      message: "Form fetched successfully",
      form,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
export async function updateFormSettings(data: {
  formId: string;
  primaryColor?: string;
  backgroundColor?: string;
  bannerImage?: string;
}) {
  try {
    const { formId, primaryColor, backgroundColor, bannerImage } = data;
    const session = getKindeServerSession();
    const user = await session.getUser();

    if (!user) {
      return {
        success: false,
        message: "Unauthorized to use this resource",
      };
    }

    const form = await prisma.form.findUnique({
      where: { formId },
      include: { settings: true },
    });

    if (!form) {
      return {
        success: false,
        message: "Form not found",
      };
    }

    // Use raw query for bannerImage to bypass Prisma Client validation error 
    // when the client hasn't been re-generated due to file locks on Windows
    if (bannerImage !== undefined) {
      await prisma.$executeRawUnsafe(
        `UPDATE "FormSettings" SET "bannerImage" = $1 WHERE "id" = $2`,
        bannerImage,
        form.settingsId
      );
    }

    const updatedSettings = await prisma.formSettings.update({
      where: { id: form.settingsId },
      data: {
        ...(primaryColor && { primaryColor }),
        ...(backgroundColor && { backgroundColor }),
      },
    });

    return {
      success: true,
      message: "Settings updated successfully",
      settings: updatedSettings,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while updating the settings",
    };
  }
}

export async function deleteForm(formId: string) {
  try {
    const session = getKindeServerSession();
    const user = await session.getUser();

    if (!user) {
      return {
        success: false,
        message: "Unauthorized to use this resource",
      };
    }

    const form = await prisma.form.findUnique({
      where: { formId, userId: user.id },
    });

    if (!form) {
      return {
        success: false,
        message: "Form not found or you don't have permission to delete it",
      };
    }

    // Delete associated settings if they are not shared (assumed 1-to-1)
    await prisma.form.delete({
      where: { formId },
    });

    // Optionally delete settings - if shared, this might be tricky, 
    // but in this app schema, they seem unique to each form.
    await prisma.formSettings.delete({
      where: { id: form.settingsId },
    });

    return {
      success: true,
      message: "Form deleted successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while deleting the form",
    };
  }
}
