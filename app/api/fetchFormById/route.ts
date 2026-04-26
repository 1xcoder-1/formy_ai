import { prisma } from "@/lib/prismadb";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const session = getKindeServerSession();
    const user = await session.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized to use this resource" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const formId = searchParams.get("formId");

    if (!formId) {
      return NextResponse.json(
        { error: "formId is required" },
        { status: 400 }
      );
    }

    const form = await prisma.form.findFirst({
      where: {
        userId: user.id,
        formId: formId,
      },
      include: {
        settings: true,
      },
    });

    if (!form) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    // Manually fetch bannerImage using raw query because Prisma client might not be aware of it yet
    const rawSettings: any[] = await prisma.$queryRawUnsafe(
      `SELECT "bannerImage", "webhookUrl" FROM "FormSettings" WHERE "id" = $1`,
      form.settingsId
    );

    if (rawSettings && rawSettings.length > 0) {
      // Check both casings as Postgres might return lowercase depending on driver/quoting
      const banner = rawSettings[0].bannerImage || rawSettings[0].bannerimage;
      const webhook = rawSettings[0].webhookUrl || rawSettings[0].webhookurl;
      if (banner !== undefined) {
        (form.settings as any).bannerImage = banner;
      }
      if (webhook !== undefined) {
        (form.settings as any).webhookUrl = webhook;
      }
    }

    return NextResponse.json({
      data: {
        success: true,
        message: "Form fetched successfully",
        form,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
