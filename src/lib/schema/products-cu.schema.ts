import { useTranslations } from "next-intl";
import { type } from "os";
import z from "zod";

const acceptedFile = ["image/png", "image/jpg", "image/jpeg"];
const addProductSchema = () => {
  const t = useTranslations("products-cu");

  return z
    .object({
      title: z
        .string({ required_error: t("require-error", { field: "title" }) })
        .min(3, { message: t("min-error", { field: "title", count: 3 }) }),
      description: z
        .string({ required_error: t("require-error", { field: "description" }) })
        .min(10, { message: t("min-error", { field: "description", count: 10 }) }),
      price: z
        .string()
        .min(1, { message: t("positive-error") })
        .transform((value) => {
          if (value !== "") return +value;
          else return 0;
        })
        .refine((value) => value > 0, { message: t("positive-error") }),

      discount: z
        .string()
        .transform((value) => {
          if (value !== "") return +value;
          else return 0;
        })
        .refine((value) => value >= 0, { message: t("positive-error") }),

      quantity: z
        .string()
        .min(1, { message: t("positive-error") })
        .transform((value) => {
          if (value !== "") return +value;
          else return 0;
        })
        .refine((value) => value > 0, { message: t("positive-error") }),

      category: z
        .string({ required_error: t("require-error", { field: "category" }) })
        .min(24, { message: t("category-error") }),
      occasion: z
        .string({ required_error: t("require-error", { field: "occasion" }) })
        .min(24, { message: t("occasion-error") }),

      imgCover: z
        .array(
          z
            .instanceof(File, { message: t("image-errors.cover-image") })
            .refine((file) => file.size <= 4 * 1024 * 1024, {
              message: t("image-errors.max-image"),
            })
            .refine((file) => acceptedFile.includes(file.type), {
              message: t("image-errors.image-type"),
            }),
        )
        .length(1, { message: t("image-errors.cover-image") }),
      images: z
        .array(z.instanceof(File, { message: t("image-errors.images") }))
        .min(1, { message: t("image-errors.images") })
        .max(4, { message: t("image-errors.max-images") })
        .refine((files) => files.every((file) => file.size < 2 * 1024 * 1024), {
          message: t("image-errors.max-image"),
        })
        .refine((files) => files.every((file) => acceptedFile.includes(file.type)), {
          message: t("image-errors.image-type"),
        }),
    })
    .refine((values) => +values.price >= +values.discount, {
      path: ["discount"],
      message: t("image-errors.discount"),
    })
    .transform((values) => ({
      ...values,
      quantity: String(values.quantity),
      price: String(values.price),
      discount: String(values.discount),
    }));
};

// Update product Schema
const updateProductSchema = () => {
  const t = useTranslations("products-cu");

  return z.object({
    title: z
      .union([
        z.string().min(3, { message: t("min-error", { field: "title", count: 3 }) }),
        z.string().length(0),
      ])
      .optional(),
    description: z
      .union([
        z.string().min(10, { message: t("min-error", { field: "description", count: 10 }) }),
        z.string().length(0),
      ])
      .optional(),

    price: z
      .union([z.coerce.number().positive({ message: t("positive-error") }), z.string().length(0)])
      .optional(),
    discount: z.string().length(0, { message: "discount is not available in update" }).optional(),
    quantity: z
      .union([z.coerce.number().positive({ message: t("positive-error") }), z.string().length(0)])
      .optional(),
    category: z
      .union([z.string().min(24, { message: t("category-error") }), z.string().length(0)])
      .optional(),
    occasion: z
      .union([z.string().min(24, { message: t("category-error") }), z.string().length(0)])
      .optional(),
  });
};

type TAddProductForm = z.infer<ReturnType<typeof addProductSchema>>;
type TUpdateProductForm = z.infer<ReturnType<typeof updateProductSchema>>;

export { addProductSchema, updateProductSchema, type TAddProductForm, type TUpdateProductForm };
