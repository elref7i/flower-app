import React from "react";
import Image from "next/image";
import { getCategoryById } from "@/lib/api/categories.api";
import img from "@/../public/assets/imgs/image-from-rawpixel-id-12370595-png 1.png";
export default async function Category({ id }: { id: string }) {
  const category: Category = await getCategoryById(id);
  return (
    <div key={category._id} className="px-2.5 py-4 border-b-2 flex gap-2.5 col-span-1 relative border-softpink-300 bg-gradient-to-t from-softpink-300/25 to-transparent">
      {/*category*/}
      <h3 className="text-8xl font-great text-softpink-200 absolute top-1/2  transform start-8 -translate-y-1/2 z-0 dark:text-zinc-600">
        Category
      </h3>
      {/* image*/}
      <Image src={img} alt="gift image" width={109.47} height={111} className="h-[111px] z-10" />
      {/*content */}
      <div className="py-5 z-20">
        {/*name*/}
        <h3 className="text-maroon-700 text-4xl font-semibold capitalize dark:text-softpink-300">
          {category.name}
        </h3>
        {/*productsCount*/}
        <h5 className="text-zinc-400 text-sm font-medium">{category.productsCount} products</h5>
        {/*icon*/}
        <div className="bg-maroon-700 rounded-full flex items-center justify-center size-10 absolute top-1 end-1 dark:bg-softpink-300">
          <Image src={category.image} alt={category.name} width={30} height={30} />
        </div>
      </div>
    </div>
  );
}
