"use server";

import { AIChatSession } from "@/lib/google-ai";
import { checkAiRateLimit } from "@/lib/rate-limit";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function generateAIPrompt(prompt: string) {
  try {
    const session = getKindeServerSession();
    const user = await session.getUser();

    if (!user) {
      return {
        success: false,
        message: "Unauthorized to use this resource",
      };
    }

    const rateLimit = await checkAiRateLimit(user.id);
    if (!rateLimit.success) {
      return {
        success: false,
        message: "Rate limit exceeded. Please wait a minute before trying again.",
      };
    }

    const result = await AIChatSession.sendMessage(prompt);
    const responseText = await result.response.text();

    return {
      success: true,
      data: responseText,
    };
  } catch (error) {
    console.error("AI Generation Error:", error);
    return {
      success: false,
      message: "Failed to generate AI response",
    };
  }
}
