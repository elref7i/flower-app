import { StarRatingStatic } from "@/components/common/rating";
import { useTranslations } from "next-intl";

export default function HeaderReview() {
  const ratingNumber = 3;

  const t = useTranslations();

  return (
    <div>
      {/* Title */}
      <h1 className="relative mb-3 w-fit text-4xl font-bold text-maroon-700 before:absolute before:bottom-0 before:h-1 before:w-[30%] before:bg-maroon-400 before:dark:bg-softpink-600 after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-1/2 after:w-[70%] after:rounded-e-full after:bg-maroon-100 dark:text-softpink-200 after:dark:bg-zinc-700 after:rtl:right-0">
        {t("product-reviews")}
      </h1>

      {/* General */}
      <h2 className="font-semibold text-xl">{t("general-rating")}</h2>

      {/* Result Ratin */}
      <p className="font-bold text-2xl">
        {ratingNumber}
        <span className="font-medium text-sm text-zinc-500">
          ({10} {t("ratings")})
        </span>
      </p>

      {/* Rating Review  */}
      <StarRatingStatic ratingNumber={ratingNumber} />
    </div>
  );
}
