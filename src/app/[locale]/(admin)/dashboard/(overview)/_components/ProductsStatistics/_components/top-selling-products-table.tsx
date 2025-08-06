"use client";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { fetchProductStats } from "@/lib/api/products.api";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

export default function TopSellingProductsTable() {
  // Hooks
  const {
    data: payload,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["product-stats"],
    queryFn: ({ pageParam = 1 }) => fetchProductStats(pageParam),
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
      {isLoading && products.length === 0 && <p>Loading...</p>}
      {isError && <p>Error fetching products</p>}
      {payload && (
        <div id="scrollableDiv" className="overflow-auto max-h-full scrollbar-hide p-0 m-0">
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
            {/* Table */}
            <Table className="w-full h-full scrollbar-hide">
              <TableBody className="flex flex-col gap-2">
                {products.map((product, index) => {
                  // تحديد خلفية الصف حسب ترتيبه
                  let bgStyle = {};

                  if (index === 0) {
                    bgStyle = {
                      background: "linear-gradient(to right, #DFAC1640 25%, #DFAC161A 100%)",
                    };
                  } else if (index === 1) {
                    bgStyle = {
                      background: "linear-gradient(to right, #757F9540 25%, #757F951A 100%)",
                    };
                  } else if (index === 2) {
                    bgStyle = {
                      background: "linear-gradient(to right, #91440040 25%, #9144001A 100%)",
                    };
                  }

                  return (
                    <TableRow
                      key={product._id}
                      style={bgStyle}
                      className="text-zinc-800 w-[488px] p-0 rounded-lg border-none h-8 flex justify-between items-center"
                    >
                      <TableCell title={product.title}>
                        {/* Product Name */}
                        {product.title.length > 27
                          ? product.title.slice(0, 27) + "..."
                          : product.title}{" "}
                        {/* Product Price */}({product.price} EGP)
                      </TableCell>
                      <TableCell className="font-medium text-sm">
                        <span className="font-bold">{product.sold}</span> Sales
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            {/* </div> */}
          </InfiniteScroll>
        </div>
      )}
    </>
  );
}
