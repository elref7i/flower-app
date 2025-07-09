"use client";
import FilterHeader from "../../filter-header";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { LoaderCircle } from "lucide-react";
import useFilterOccasion from "./hook/use-filter-occasion";

// Occasion filter component
export default function OccasionFilter() {
  const {
    error,
    isLoading,
    loadMore,
    occasions,
    handleOccasion,
    searchParams,
    isFetchingNextPage,
  } = useFilterOccasion();

  return (
    <>
      <div className="mb-5 w-full max-h-80 overflow-y-auto scrollBar-hidden relative">
        {/* Filter header component */}
        <FilterHeader title="occasion" />

        {/* display error if existed */}
        {error && <h3 className="text-sm text-maroon-500">{error.message}</h3>}

        {/* Display loading */}
        {isLoading && (
          <div className="text-sm text-maroon-500">
            <span className="flex gap-5 justify-center mt-3">
              <LoaderCircle className="animate-spin" /> Please Wait...
            </span>
          </div>
        )}

        {/* Occasions */}
        {occasions && (
          <div className="grid grid-cols-2 gap-3">
            {occasions?.length ? (
              occasions.map((occ) => (
                // occasion
                <div
                  key={occ._id}
                  onClick={() => handleOccasion(occ.name)}
                  className={cn(
                    `cursor-pointer w-full h-20 relative before:rounded-md before:absolute before:opacity-50 before:w-full before:h-full `,
                    searchParams.get("occasion") === occ.name.toLocaleLowerCase()
                      ? "before:bg-gradient-to-b before:from-black before:from-25% before:to-[#FFA3B9]"
                      : "before:bg-black",
                  )}
                >
                  {/* Occasion Image */}
                  <Image
                    src={`https://flower.elevateegy.com/uploads/${occ.image}`}
                    width={133}
                    height={74}
                    className="rounded-md w-full h-full object-fill"
                    alt="icon"
                  />

                  {/* Occasion name */}
                  <h3 className="text-zinc-50 capitalize font-medium text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {occ.name}
                  </h3>
                </div>
              ))
            ) : (
              // If there are no occasions
              <p className="text-sm col-span-2 text-maroon-500 border rounded-md py-3 px-2 border-zinc-300 dark:border-zinc-700">
                Sorry...There are no Occasions to display
              </p>
            )}

            {/*Observer element to fetch next page */}
            <div className="text-sm col-span-2 text-maroon-500 min-h-1" ref={loadMore}>
              {isFetchingNextPage && (
                <span className="flex gap-5 justify-center mt-3">
                  <LoaderCircle className="animate-spin" /> Please Wait...
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
