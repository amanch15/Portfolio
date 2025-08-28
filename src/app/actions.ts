"use server";

import { portfolioEnhancementSuggestions } from "@/ai/flows/portfolio-enhancement-suggestions";
import { z } from "zod";

const suggestionSchema = z.object({
  portfolioContent: z.string().min(50, { message: "Portfolio content must be at least 50 characters." }),
});

export type FormState = {
  suggestions?: string;
  error?: string;
  fieldErrors?: {
    portfolioContent?: string[];
  }
}

export async function getPortfolioSuggestions(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = suggestionSchema.safeParse({
    portfolioContent: formData.get("portfolioContent"),
  });

  if (!validatedFields.success) {
    return {
      error: "Invalid input provided.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await portfolioEnhancementSuggestions({
      portfolioContent: validatedFields.data.portfolioContent,
    });
    return { suggestions: result.suggestions };
  } catch (e) {
    console.error(e);
    return { error: "An unexpected error occurred. Please try again." };
  }
}
