import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useGetProductsByOccasion(id: string | null) {
  const {
    data: payload,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productByOccasion"],
    queryFn: async () => {
      const response = await fetch(`https://flower.elevateegy.com/api/v1/products?occation=${id}`, {
        method: "GET",
        headers: {
          //   sort: "solid",
          //   order: "desc",
          //   limit: "10",
        },
      });

      const payload: APIResponse<productByOccasion> = await response.json();
      if ("error" in payload) {
        toast.error("Something went wrong while fetching products");
        throw new Error("Failed to fetch");
      }
      console.log(payload.products, "lkhffl");
      return payload;
    },
  });

  return { payload, isLoading, error };
}
