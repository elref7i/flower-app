import { StarRatingReadonly } from "@/components/common/rating";
import CommentComponent from "./comment-component";

export default function ProductReview() {
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
          4.5 <span className="font-medium text-sm text-zinc-500">(8 ratings)</span>
        </p>

        {/* Rating Review  */}
        <StarRatingReadonly />
      </div>

      {/* Form & Comments */}
      <div className="grid grid-cols-12 gap-10">
        {/* Form */}

        <form className="col-span-5 bg-red-300"></form>

        {/* Comments */}
        <div className="space-y-[10px] col-span-6 relative before:absolute before:border-l-2 before:h-full before:border-zinc-200 before:-left-5 max-h-[300px] overflow-auto">
          {/* comment */}
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
        </div>
      </div>
    </div>
  );
}
