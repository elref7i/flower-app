"use client"
import Image from "next/image";
import useGetProductDetails from "../_hooks/use-get-product";
import { HeartPlus, Package, ShoppingCart, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function ProductDetails({ productId }: { productId: string }) {
    const { product, isLoading } = useGetProductDetails(productId);
    console.log(isLoading);

    console.log("product details", product);
    console.log("api", process.env.NEXT_PUBLIC_API);


    return (
        <section className="">

            {isLoading && <p>Loading...</p>}
            {product &&
                // hole div
                <div className="flex gap-18 ">
                    {/* Images */}
                    <div className="">
                        <div className="w-144 h-[402px] " >
                            <Image
                                src={product.imgCover}
                                alt={product.title}
                                width={605}
                                height={300}
                                quality={100}
                                className="rounded-lg  object-cover h-full "
                            />
                        </div>
                        <div className="flex gap-2 mt-2">
                            {product.images.map((img, index) => (
                                <Image
                                    key={index}
                                    src={img}
                                    width={91}
                                    height={111}
                                    alt={`product image ${index + 1}`}
                                    className="product-image rounded-lg"
                                />
                            ))}
                        </div>


                    </div>
                    {/* product details */}
                    <div className="flex flex-col justify-between">
                        <div>

                            <div>
                                <h2 className="font-semibold text-3xl">{product.title}</h2>
                                <div className="flex gap-4 items-center py-3">
                                    <h2 className="font-bold text-3xl text-zinc-300 dark:text-zinc-500">{product.price} <span className="font-semibold text-zinc-800 dark:text-zinc-50">{product.priceAfterDiscount} EGP</span></h2>
                                    <h4 className="w-fit bg-zinc-100 text-zinc-700 flex gap-2 font-medium rounded-full px-3  py-2  dark:bg-zinc-700 dark:text-zinc-50"><Package /> {product.quantity} left in stock</h4>
                                </div>
                            </div>
                            <Separator className="w-[605px] text-zinc-100 dark:text-zinc-700 h-[2px]" />
                            <div className="flex gap-2 py-4">
                                <Star className="text-yellow-500 fill-yellow-500" /> Rating: {product.rateAvg}/5 <span className="text-blue-600 dark:text-blue-400 font-medium ">({product.rateCount}ratings)</span>
                            </div>
                            <Separator className="w-[605px] text-zinc-100 dark:text-zinc-700 h-[2px]" />
                            <div className="pt-4">
                                <p className="text-zinc-600 dark:text-zinc-400">{product.description}</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button className="p-5 rounded-lg border dark:border-zinc-500  dark:bg-transparent w-6 bg-zinc-100 text-black dark:text-zinc-500"><HeartPlus /> </Button>
                            <Button className="w-full font-medium dark:text-zinc-800"><ShoppingCart /> Add to Cart</Button>
                        </div>
                    </div>

                </div>}
        </section>
    );
}