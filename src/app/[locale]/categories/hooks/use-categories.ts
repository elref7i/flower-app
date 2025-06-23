import { useState } from "react";
import { convertSearchParams } from "@/lib/utils/convert-search-params";
import { useQuery } from "@tanstack/react-query";

export const useCategories = (searchParams: SearchParams) => {
  const [params, SetParams] = useState({ page: 5 });
  const queryString = convertSearchParams(searchParams);
  console.log(queryString.toString());

  const {
    data: payload,
    isFetched,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/categories?${queryString}`);
      const payload: APIResponse<Categories> = await response.json();
      if ("error" in payload) throw new Error(payload.error);
      return payload;
    },
  });

  return { payload, isFetched, isLoading };
};
