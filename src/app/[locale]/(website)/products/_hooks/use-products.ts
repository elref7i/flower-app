import { createReview } from "../_actions/products.action";
import { ProductReviewFields } from "@/lib/schema/review.schema";
import { toast } from "sonner";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProductReviews } from "@/lib/api/products.api";

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

export function useSpecificReviews(productId: string) {
  const { data: payload, isLoading } = useQuery({
    queryKey: ["productReviews", productId],
    queryFn: async () => {
      const payload = await getProductReviews(productId);
      return payload;
    },
    refetchOnWindowFocus: false,
  });

  return { payload, isLoading };
}
