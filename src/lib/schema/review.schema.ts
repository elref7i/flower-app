import { z } from "zod";

export const ProductReviewSchema = z.object({
  rating: z
    .number({ required_error: "required" })
    .min(1, "required rating")
    .max(5, "required rating"),

  title: z
    .string({ required_error: "required title product" })
    .min(3, "required title product")
    .max(20, "required title product"),
  comment: z
    .string({ required_error: "required  comment" })
    .min(3, "required  comment")
    .max(100, "required  comments"),
});

export type ProductReviewFields = z.infer<typeof ProductReviewSchema>;
