import { StarRatingStatic } from "@/components/common/rating";
import CommentComponent from "./comment-component";
import ProductReviewForm from "./product-review-form";
import { Suspense } from "react";

export default async function ProductReview() {
  const ratingNumber = 3;
  const id = "673e1cd711599201718280fb";

  const response = await fetch(`${process.env.API!}/products/${id}/reviews`);
  const payload: APIResponse<ProductReview> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  console.log(payload);

  return (
    <div className="space-y-8">
      {/* product Review */}
      <div>
        {/* Title */}
        <h1 className="font-bold text-4xl  text-maroon-700 dark:text-softpink-200">
          Product Reviews
        </h1>

        {/* General */}
        <h2 className="font-semibold text-xl">General rating:</h2>

        {/* Result Ratin */}
        <p className="font-bold text-2xl">
          4.5 <span className="font-medium text-sm text-zinc-500">({ratingNumber} ratings)</span>
        </p>

        {/* Rating Review  */}
        <StarRatingStatic ratingNumber={ratingNumber} />
      </div>

      {/* Form & Comments */}
      <div className="grid grid-cols-12 gap-10 ">
        {/* Form */}
        <ProductReviewForm />

        {/* Comments */}
        <div className="space-y-[10px] col-span-6 relative before:absolute before:border-l-2 before:h-full before:border-zinc-200 before:-left-5 max-h-[300px] overflow-auto">
          {/* comment */}

          {payload.reviews.length === 0 && (
            <p className="text-zinc-500">No reviews yet. Be the first to review this product!</p>
          )}

          <Suspense fallback={<p>Loading comments...</p>}>
            {payload.reviews.map((review) => (
              <CommentComponent key={review._id} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
