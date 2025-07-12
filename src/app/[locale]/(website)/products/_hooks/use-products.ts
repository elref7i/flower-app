import { createReview } from "../_actions/products.action";
import { ProductReviewFields } from "@/lib/schema/review.schema";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

export function useCreateProductReview() {
  const {
    mutateAsync: addReview,
    error,
    isPending,
    isSuccess,
    data,
  } = useMutation({
    mutationFn: async (values: ProductReviewFields) => await createReview(values),
    onSuccess: (data) => {
      toast.success("Succesful Review");
    },
    onError: (error) => {
      toast.error(error.message || "Error....");
    },
  });

  return { addReview, error, isPending, isSuccess, data };
}
