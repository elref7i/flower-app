
"use client"

import { useSearchParams } from 'next/navigation';
import useGetProductsByFilters from "./hooks/useGetProductsByFillters";
import Image from "next/image";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import RatingStars from '../../categories/_components/rating-star';
import { Separator } from '@/components/ui/separator';
import PaginationComponent from '@/components/common/pagination-component';
import Link from 'next/link';



export default function ProductGrid() {

    const searchParams = useSearchParams();
    const category = searchParams.get('category') || undefined;
    const occasion = searchParams.get('occasion') || undefined;
    const rateAvgParam = searchParams.get('rateAvg[gte]');
    const rateAvg = rateAvgParam ? parseFloat(rateAvgParam) : undefined;
    const priceGteParam = searchParams.get('price[gte]');
    const priceGte = priceGteParam ? parseFloat(priceGteParam) : undefined;
    const priceLteParam = searchParams.get('price[lte]');
    const priceLte = priceLteParam ? parseFloat(priceLteParam) : undefined;


    const {
        products, metaData, page, setPage, isLoading, isError
    } = useGetProductsByFilters({
        category,
        occasion,
        rateAvg,
        priceGte,
        priceLte
    });

    const isNew = (createdAt: string) => {
        const createdDate = new Date(createdAt);
        const now = new Date();
        const daysDiff = (now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24);
        return daysDiff <= 7;
    }
    const isHot = (sold: number) => {
        return sold >= 100;
    }
    const isOutOfStock = (quantity: number) => {
        return quantity === 0;
    }

    console.log("products", products);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading products</p>;

    //   No products found case
    if (products.length === 0) {
        return (
            <div className="p-8 text-center rounded-lg shadow-sm col-span-full">
                <h2 className="text-xl font-semibold text-maroon-700 dark:text-softpink-200">
                    No Products Found
                </h2>
                <p className="text-gray-500 mt-2">
                    try to change filters or remove them to find other results.
                </p>
            </div>
        );
    }

    //  Display products 
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {products.map((prod: Product) => {
                    // Flags
                    const newFlag = isNew(prod.createdAt);
                    const hotFlag = isHot(prod.sold);
                    const outOfStockFlag = isOutOfStock(prod.quantity);

                    return (
                        <>
                            <Link href={`/products/${prod._id}`} key={prod._id} className="gap-4 rounded-2xl group ">
                                {/*product cover*/}
                                <div className="rounded-xl relative ">
                                    {/*budges*/}
                                    <div className='flex absolute top-2 end-2 gap-2.5'>
                                        {newFlag && <span className='bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full py-0.5 px-2 uppercase'>New</span>}
                                        {hotFlag && <span className='bg-maroon-50 text-maroon-600 text-xs font-medium rounded-full py-0.5 px-2 uppercase'>Hot</span>}
                                        {outOfStockFlag && <span className='bg-red-600 text-softPink-50 text-xs font-medium rounded-full py-0.5 px-2'>Out of Stock</span>}
                                    </div>
                                    {/*image*/}
                                    <Image
                                        src={prod.imgCover}
                                        alt={prod.title}
                                        width={400}
                                        height={400}
                                        className="h-[310px] w-full rounded-xl object-cover mx-auto"
                                    />
                                    {/*layer*/}
                                    <div className="flex items-center justify-center absolute inset-0 gap-1 bg-[#E65073] bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">
                                        {/*heart icon*/}
                                        <div className="bg-white size-[30px] rounded-full flex justify-center items-center gap-2.5 ">
                                            <Heart size={20} color="#741C21" strokeWidth={1.25} />
                                        </div>
                                        {/*view icon*/}
                                        <Link href={`/products/${prod._id}`} className="bg-white size-[30px] rounded-full flex justify-center items-center gap-2.5">
                                            <Eye size={20} color="#741C21" strokeWidth={1.25} />
                                        </Link>
                                    </div>
                                </div>

                                {/*details*/}
                                <div className="gap-3 px-4">
                                    {/*title*/}
                                    <h3 className="text-maroon-700 font-semibold text-lg dark:text-softpink-200">
                                        {prod.title.split(" ", 3).join(" ") +
                                            (prod.title.split(" ").length > 3 ? "..." : "")}
                                    </h3>
                                    <div className="relative overflow-hidden py-1">
                                        {/*rating*/}
                                        <RatingStars rating={prod.rateAvg || 4} />
                                        {/*price*/}
                                        <div className="flex py-1">
                                            <span className="text-maroon-700 font-medium gap-2 dark:text-softpink-200">
                                                {prod.priceAfterDiscount} EGP
                                            </span>
                                            <span className="text-zinc-400 font-medium line-through dark:text-zinc-500">
                                                {prod.price} EGP
                                            </span>
                                        </div>
                                        {/*icon*/}
                                        <div className="size-[42px] bg-maroon-600 rounded-full flex justify-center items-center dark:text-maroon-500 absolute end-0 top-1/2 -translate-y-1/2">
                                            <ShoppingCart size={24} color="#ffffff" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </>
                    );
                })}
            </div>

            {metaData && (
                <div className="flex flex-col items-center justify-center w-full">
                    <Separator className="my-7 h-[1px] bg-zinc-100 dark:bg-zinc-700 w-full" />
                    <PaginationComponent
                        metaData={metaData}
                        currentPage={page}
                        onPageChange={setPage}
                    />
                </div>
            )}
        </>
    );

}