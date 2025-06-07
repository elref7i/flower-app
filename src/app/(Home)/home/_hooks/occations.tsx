import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useOccasions() {
  const {
    data: payload,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Occasions"],
    queryFn: async () => {
      const response = await fetch(`https://flower.elevateegy.com/api/v1/occasions?limit=${4}`, {
        method: "GET",
        headers: {
          //   sort: "solid",
          //   order: "desc",
          // 'limit': "4",
        },
      });

      const payload: APIResponse<occasions> = await response.json();
      if ("error" in payload) {
        toast.error("Something went wrong while fetching products");
        throw new Error("Failed to fetch");
      }
      console.log(payload.occasions);
      return payload;
    },
  });

  return { payload, isLoading, error };
}
