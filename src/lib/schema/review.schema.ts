import { z } from "zod";

export const ProductReviewSchema = z.object({
  rating: z.number({ required_error: "required" }),
  title: z
    .string({ required_error: "required title product" })
    .min(3, "required title product")
    .max(5, "required title product"),
  comment: z
    .string({ required_error: "required title comment" })
    .min(3, "required title comment")
    .max(5, "required title comments"),
});

export type ProductReviewFields = z.infer<typeof ProductReviewSchema>;
