import { useQuery } from "@tanstack/react-query";
import { getCategoriesPaginated } from "@/lib/api/categories.api";

export default function useCategoriesPaginated(page: number, search: string) {
  return useQuery({
    queryKey: ["categories", page, search],
    queryFn: () => getCategoriesPaginated(page, search),
    placeholderData: (prev) => prev,
  });
}
