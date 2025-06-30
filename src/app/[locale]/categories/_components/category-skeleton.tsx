import { Skeleton } from "@/components/ui/skeleton";
export default function CategorySkeleton() {
  return (
    <div className=' flex gap-2.5 col-span-1 relativ'>
      {/* image*/}
      <Skeleton className='h-[111px] w-[109.47px]' />
      {/*content */}
      <div className='py-5 z-20'>
        {/*name*/}
        <Skeleton className='h-4 w-40 m-3' />
        {/*productsCount*/}
        <Skeleton className='h-2 w-32 m-3' />
        {/*icon*/}
        <Skeleton className='absolute top-1 end-1 rounded-full size-10' />
      </div>
    </div>
  );
}