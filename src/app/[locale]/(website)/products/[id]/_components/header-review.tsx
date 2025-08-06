import { StarRatingStatic } from "@/components/common/rating";
import { useTranslations } from "next-intl";

export default function HeaderReview() {
  const ratingNumber = 3;

  const t = useTranslations();

  return (
    <div>
      {/* Title */}
      <h1 className="font-bold text-4xl  text-maroon-700 dark:text-softpink-200">
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
