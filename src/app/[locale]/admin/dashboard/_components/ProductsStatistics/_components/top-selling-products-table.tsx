"use client";
import { LoaderCircle } from "lucide-react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTopSellingProducts } from "../_hooks/useTopSellingProducts";
import { useTranslations } from "next-intl";

export default function TopSellingProductsTable() {
  // Hook
  const { products, fetchNextPage, hasNextPage, isLoading, isError, payload } =
    useTopSellingProducts();

  // Load More
  const loadMore = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  // Translation
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

      {/* Table */}
      {payload && (
        <div id="scrollableDiv" className="h-[350px] w-full overflow-y-auto  rounded-md mt-0">
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
            <div className="flex flex-col gap-3 pr-4">
              {products.map((product, index) => {
                // default color
                let gradientClass = "bg-zinc-100";

                // Background color for first 3 rows
                if (index === 0) {
                  gradientClass = "bg-[linear-gradient(to_right,#DFAC1640_25%,#DFAC161A_100%)]";
                } else if (index === 1) {
                  gradientClass = "bg-[linear-gradient(to_right,#757F9540_25%,#757F951A_100%)]";
                } else if (index === 2) {
                  gradientClass = "bg-[linear-gradient(to_right,#91440040_25%,#9144001A_100%)]";
                }

                return (
                  // rows
                  <div key={product._id} className={`rounded-lg px-3 py-1 ${gradientClass}`}>
                    {product.title.length > 27 ? product.title.slice(0, 27) + "..." : product.title}{" "}
                    ({product.price} EGP)
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      )}
    </>
  );
}
