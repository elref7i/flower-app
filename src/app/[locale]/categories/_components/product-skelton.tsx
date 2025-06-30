import { Skeleton } from "@/components/ui/skeleton";
export default function ProductsSkeleton() {
  return (
    <div className="gap-6 grid grid-cols-4 py-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <div className='gap-4 rounded-2xl group'>
          {/*image*/}
          <Skeleton className='h-[272px] rounded-xl w-[302px]' />
          {/*details*/}
          <div className='gap-3'>
            {/*title*/}
            <Skeleton className='h-4 w-40 m-3' />
            <div className='relative overflow-hidden py-1'>
              {/*icon*/}
              <Skeleton className='size-10 rounded-full absolute end-0 top-1/2 -translate-y-1/2' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}