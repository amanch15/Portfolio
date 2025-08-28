'use server';
/**
 * @fileOverview This file defines a Genkit flow for providing portfolio enhancement suggestions.
 *
 * - portfolioEnhancementSuggestions - A function that takes portfolio content as input and returns enhancement suggestions.
 * - PortfolioEnhancementSuggestionsInput - The input type for the portfolioEnhancementSuggestions function.
 * - PortfolioEnhancementSuggestionsOutput - The return type for the portfolioEnhancementSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioEnhancementSuggestionsInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The current content of the portfolio, including project descriptions, skills, and experience.'),
});
export type PortfolioEnhancementSuggestionsInput = z.infer<typeof PortfolioEnhancementSuggestionsInputSchema>;

const PortfolioEnhancementSuggestionsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('A list of suggestions for enhancing the portfolio, based on industry trends and best practices.'),
});
export type PortfolioEnhancementSuggestionsOutput = z.infer<typeof PortfolioEnhancementSuggestionsOutputSchema>;

export async function portfolioEnhancementSuggestions(
  input: PortfolioEnhancementSuggestionsInput
): Promise<PortfolioEnhancementSuggestionsOutput> {
  return portfolioEnhancementSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioEnhancementSuggestionsPrompt',
  input: {schema: PortfolioEnhancementSuggestionsInputSchema},
  output: {schema: PortfolioEnhancementSuggestionsOutputSchema},
  prompt: `You are an AI Portfolio Assistant that reviews portfolios and provides suggestions for improvement.

  Analyze the following portfolio content and suggest enhancements based on industry trends and best practices to attract more attention from potential employers.

  Portfolio Content: {{{portfolioContent}}}

  Provide specific and actionable suggestions.
  `,
});

const portfolioEnhancementSuggestionsFlow = ai.defineFlow(
  {
    name: 'portfolioEnhancementSuggestionsFlow',
    inputSchema: PortfolioEnhancementSuggestionsInputSchema,
    outputSchema: PortfolioEnhancementSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
