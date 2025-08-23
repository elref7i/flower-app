import { useTranslations } from "next-intl";
import { z } from "zod";

function usePriceFilterSchema() {
  const t = useTranslations();
  return z
    .object({
      minPrice: z
        .string({ required_error: t("number-error") })
        .trim()
        .transform((val) => (val === "" ? undefined : Number(val)))
        .refine((val) => val === undefined || val > 0, { message: t("positive-error") })
        .optional(),
      maxPrice: z
        .string({ required_error: t("number-error") })
        .trim()
        .transform((val) => (val === "" ? undefined : Number(val)))
        .refine((val) => val === undefined || val > 0, { message: t("positive-error") })
        .optional(),
    })
    .refine(
      (values) => {
        if (values.minPrice !== undefined && values.maxPrice !== undefined) {
          return Number(values.minPrice) <= Number(values.maxPrice);
        }
        return true;
      },

      { path: ["maxPrice"], message: t("numbers-compare-error") },
    );
}
type TPriceFilter = z.infer<ReturnType<typeof usePriceFilterSchema>>;

export { usePriceFilterSchema, type TPriceFilter };
