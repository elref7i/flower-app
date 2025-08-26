// import { useTranslations } from "next-intl";
import { z } from "zod";

// Translation
// const t = useTranslations();

export const addCategorySchema = z.object({
  name: z
    .string()
    .min(1, "Category Name is requierd")
    .max(50, "Name must be less than 50 characters"),
  image: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, "File size must be less than 5MB")
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "Only JPEG, PNG, and WebP images are allowed",
    ),
});

export const updateCategorySchema = z.object({
  name: z
    .string()
    .min(1, "Category Name is requierd")
    .max(50, "Name must be less than 50 characters"),
});

export type AddCategoryFormData = z.infer<typeof addCategorySchema>;
export type UpadateCategoryFromData = z.infer<typeof updateCategorySchema>;
