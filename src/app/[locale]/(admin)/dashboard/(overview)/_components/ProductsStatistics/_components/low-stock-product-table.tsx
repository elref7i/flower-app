"use client";
import { LoaderCircle } from "lucide-react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLowStockProduct } from "../_hooks/useLowStockProduct";
import { useTranslations } from "next-intl";

export default function LowStockProductsList() {
  // Hook
  const { products, fetchNextPage, hasNextPage, isLoading, isError, payload } =
    useLowStockProduct();

  // Load More
  const loadMore = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  // Translations
  const t = useTranslations();

  return (
    <>
      {/* Loading */}
      {isLoading && products.length === 0 && (
        <div className="flex justify-center py-8">
          <LoaderCircle className="animate-spin" />
        </div>
      )}
      {/* Error */}
      {isError && <p className="text-center py-4 text-red-500">Error fetching products</p>}

      {payload && (
        <div id="scrollableDiv" className="h-[350px] w-full overflow-y-auto rounded-md mt-0">
          <InfiniteScroll
            dataLength={products.length}
            next={loadMore}
            hasMore={hasNextPage}
            loader={
              <div className="flex justify-center py-4">
                <LoaderCircle className="animate-spin" />
              </div>
            }
            endMessage={
              <p className="text-center py-2 text-zinc-400 text-sm">{t("no-more-porducts")}</p>
            }
            scrollableTarget="scrollableDiv"
          >
            {/* Table */}
            <div className="flex flex-col gap-2 pr-4">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="rounded-lg px-3 py-2 bg-zinc-100 flex justify-between items-center"
                >
                  {/* Product Name */}
                  <span className="truncate max-w-[240px]" title={product.title}>
                    {product.title.length > 27 ? product.title.slice(0, 27) + "..." : product.title}
                  </span>

                  {/* Product Quantity */}
                  <span
                    className={`font-semibold text-sm ${
                      product.quantity < 0 ? "text-red-500" : "text-zinc-700"
                    }`}
                  >
                    {product.quantity} Products
                  </span>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      )}
    </>
  );
}
