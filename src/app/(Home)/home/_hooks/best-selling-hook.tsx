import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useGetProducts() {
  const {
    data: payload,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["BestSelling"],
    queryFn: async () => {
      const response = await fetch(`https://flower.elevateegy.com/api/v1/best-seller`, {
        method: "GET",
        headers: {
          //   sort: "solid",
          //   order: "desc",
          //   limit: "10",
        },
      });

      const payload: APIResponse<product[]> = await response.json();
      if ("error" in payload) {
        toast.error("Something went wrong while fetching products");
        throw new Error("Failed to fetch");
      }
      console.log(payload.bestSeller);
      return payload.bestSeller;
    },
  });

  return { payload, isLoading, error };
}
