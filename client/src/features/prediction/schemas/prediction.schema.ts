import { z } from "zod";

export const predictionSchema = z.object({
  income: z
    .number()
    .positive("Income must be greater than 0"),

  debt: z
    .number()
    .min(0, "Debt cannot be negative"),

  credit_score: z
    .number()
    .min(300, "Minimum credit score is 300")
    .max(850, "Maximum credit score is 850"),
});

export type PredictionSchema = z.infer<
  typeof predictionSchema
>;