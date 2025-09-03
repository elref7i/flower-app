import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchLowStockProducts } from "@/lib/api/products.api";

export function useLowStockProduct() {
  const {
    data: payload,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["product-low-stock"],
    queryFn: ({ pageParam = 1 }) => {
      return fetchLowStockProducts(pageParam);
    },
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage.metadata;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const products = payload?.pages.flatMap((page) => page.products) || [];

  return { products, fetchNextPage, hasNextPage, isLoading, isError, payload };
}
