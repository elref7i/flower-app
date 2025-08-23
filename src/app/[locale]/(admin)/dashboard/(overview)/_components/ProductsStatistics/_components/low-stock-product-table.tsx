"use client";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { fetchLowStockProducts } from "@/lib/api/products.api";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoaderCircle } from "lucide-react";

export default function LowStockProductsTable() {
  // Hooks
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

  // Variables
  const products = payload?.pages.flatMap((page) => page.products) || [];

  // Functions
  const loadMore = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  return (
    <>
      {isLoading && products.length === 0 && <p className="text-zinc-400">Loading...</p>}
      {isError && <p className="text-center text-red-600">Error fetching products</p>}
      {payload && (
        <div id="scrollableDiv" className="overflow-auto h-full  rounded scrollbar-hide">
          <InfiniteScroll
            dataLength={products.length}
            next={loadMore}
            hasMore={hasNextPage}
            loader={
              <p className="py-1 text-zinc-500 flex justify-center">
                <LoaderCircle />
              </p>
            }
            scrollableTarget="scrollableDiv"
          >
            <Table className="w-full h-full scrollbar-hide m-0 p-0">
              <TableBody>
                {products.map((product) => (
                  <TableRow
                    key={product._id}
                    className="text-zinc-800 w-[488px] p-0 border-b border-zinc-100 h-8 flex justify-between items-center"
                  >
                    <TableCell title={product.title}>
                      {product.title.length > 27
                        ? product.title.slice(0, 27) + "..."
                        : product.title}
                    </TableCell>
                    <TableCell className="font-medium text-sm">
                      <span className={`font-bold ${product.quantity < 0 ? "text-red-500" : ""}`}>
                        {product.quantity} Products
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </InfiniteScroll>
        </div>
      )}
    </>
  );
}
