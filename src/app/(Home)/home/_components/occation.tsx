"use client";
import React, { useEffect, useState } from "react";
import useOccasions from "../_hooks/occations";
import Link from "next/link";
import { toast } from "sonner";
import Item from "@/components/common/card-item";

async function get(id: any) {
  console.log(id);
  const response = await fetch(`https://flower.elevateegy.com/api/v1/products?occasion=${id}`, {
    method: "GET",
    headers: {
      //   sort: "solid",
      //   order: "desc",
      //   limit: "10",
    },
  });

  const payload: APIResponse<productByOccasion> = await response.json();
  if ("error" in payload) {
    toast.error("Something went wrong while fetching products");
    throw new Error("Failed to fetch");
  }
  console.log(payload.products, "lkhffl");
  return payload.products;
}
export default function Occasion() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [products, setProducts] = useState<product[] | null>(null);
  const { payload, isLoading } = useOccasions();

  useEffect(() => {
    const fetchProducts = async () => {
      if (selectedId) {
        try {
          const result: product[] = await get(selectedId);
          setProducts(result);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    };
    fetchProducts();
    console.log(selectedId);
  }, [selectedId]);

  return (
    <section className="w-full  ">
      <div className="flex justify-between items-center w-full  ">
        <p className="font-bold text-4xl text-maroon-700   ">
          <span className="border-b-[2px] border-pink-600">Mos</span>
          <span>t Popular</span>
        </p>

        <div className="flex space-x-5 font-medium text-[16px]">
          {payload?.occasions.map((section) => (
            <Link
              key={section._id}
              className={
                selectedId === section._id ? "text-maroon-600 font-bold " : "text-zinc-700"
              }
              href={"#"}
              onClick={() => setSelectedId(section._id)}
            >
              <p>{section.name}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap space-x-6 mt-14 ">
        {products?.map((product) => (
          <Item
            image={product.imgCover}
            price={product.price}
            priceAfterDiscount={product.priceAfterDiscount}
            title={product.title}
            rate={product.rateCount}
          />
        ))}
      </div>
    </section>
  );
}
