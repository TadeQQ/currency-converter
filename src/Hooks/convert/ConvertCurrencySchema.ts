import { z } from "zod";

export const ConvertCurrencySchema = z.object({
  amount: z.number().min(1),
  from: z.string().min(1),
  to: z.string().min(1),
});

export type ConvertData = z.infer<typeof ConvertCurrencySchema>;
