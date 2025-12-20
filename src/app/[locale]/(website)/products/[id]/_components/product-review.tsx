import ProductReviewForm from "./product-review-form";
import { Suspense, use } from "react";
import CommentComponent from "./comment-component";
import { getProductReviews } from "@/lib/api/products.api";
import HeaderReview from "./header-review";

export default async function ProductReview({ productId }: { productId: string }) {
  // Variables
  const payload = await getProductReviews(productId);

  return (
    <section className="space-y-8">
      {/* product Review */}
      <HeaderReview />

      {/* Form & Comments */}
      <div className="grid grid-cols-12 gap-10 ">

        <div className="col-span-6">
          {/* Comments */}
          {payload.reviews.length === 0 ? (
            <CommentComponent />
          ) : (
            <div className="space-y-[10px] col-span-6 relative before:absolute before:border-l-2 before:h-full before:border-zinc-200 before:-left-5 max-h-[300px] overflow-auto">
              {/* comment */}
              <Suspense fallback={<p>Loading comments...</p>}>
                {payload.reviews.map((review) => (
                  <CommentComponent key={review._id} />
                ))}
              </Suspense>
            </div>
          )}
        </div>

        {/* Form */}
        <div className="col-span-6">
          <ProductReviewForm productId={productId} />
        </div>
      </div>
    </section>
  );
}
