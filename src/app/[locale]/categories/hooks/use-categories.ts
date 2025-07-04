import { useQuery } from "@tanstack/react-query";

export const useCategories = (page: number) => {
  const {
    data: payload,
    isFetched,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/categories?${page}`);
      const payload: APIResponse<Categories> = await response.json();
      if ("error" in payload) throw new Error(payload.error);
      return payload;
    },
  });

  return { payload, isFetched, isLoading };
};
