import { z } from "zod";

const useQuantitySchema = (validQuantity: number) => {
  return z.object({
    quantity: z.coerce
      .number({ message: "You should enter number" })
      .positive({ message: "Minimum quantity 1 piece" })
      .min(1, { message: "Minimum quantity 1 piece" })
      .refine((value) => value <= validQuantity, { message: "Quantity is larger than our stock" }),
  });
};
type QuantityFormField = z.infer<ReturnType<typeof useQuantitySchema>>;
export { useQuantitySchema, type QuantityFormField };
