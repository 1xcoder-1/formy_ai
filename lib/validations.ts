import { z } from "zod";

export const createFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  description: z.string().max(500, "Description must be less than 500 characters").optional(),
});

export const saveFormSchema = z.object({
  formId: z.string().min(1, "Form ID is required"),
  name: z.string().max(100, "Name must be less than 100 characters").optional(),
  description: z.string().max(500, "Description must be less than 500 characters").optional(),
  jsonBlocks: z.string().max(100000, "Form layout is too large").refine((val) => {
    try {
      JSON.parse(val);
      return true;
    } catch {
      return false;
    }
  }, {
    message: "Invalid JSON format for form layout",
  }),
});

export const submitResponseSchema = z.object({
  formId: z.string().min(1, "Form ID is required"),
  turnstileToken: z.string().optional(),
  response: z.string().max(100000, "Response is too large").refine((val) => {
    try {
      JSON.parse(val);
      return true;
    } catch {
      return false;
    }
  }, {
    message: "Invalid JSON format for response",
  }),
});

export const updateFormSettingsSchema = z.object({
  formId: z.string().min(1, "Form ID is required"),
  primaryColor: z.string().max(50).optional(),
  backgroundColor: z.string().max(50).optional(),
  bannerImage: z.string().max(10000).optional(),
  webhookUrl: z.union([z.literal(""), z.string().url("Invalid Webhook URL")]).optional(),
  maxResponses: z.number().int().optional().nullable(),
  expiryDate: z.string().optional().nullable(),
});
