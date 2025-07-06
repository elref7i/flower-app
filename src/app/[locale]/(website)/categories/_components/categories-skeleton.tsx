import { Skeleton } from "@/components/ui/skeleton";
export default function CategoriesSkeleton() {
  return (
    <div className="py-4 gap-[60px] grid grid-cols-3">
      {Array.from({ length: 13 }).map((_, i) => (
        <div className="px-2.5 py-4 gap-2.5 col-span-1 flex relative">
          {/*image*/}
          <Skeleton className="h-[111px] w-[109.47px]" />
          {/*content */}
          <div className="py-5 z-20">
            <Skeleton className="h-4 w-40 m-3" />
            <Skeleton className="h-2 w-32 m-3" />
            <Skeleton className="absolute top-1 end-1 rounded-full size-10" />
          </div>
        </div>
      ))}
    </div>
  );
}
