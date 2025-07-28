import React from "react";
import Image from "next/image";
import img from "@/../public/assets/imgs/image-from-rawpixel-id-12370595-png 1.png";
import { getCategories } from "@/lib/api/categories.api";
import { Link } from "@/i18n/navigation";
import PaginationComponent from "@/components/common/pagination-component";
export default async function CategoriesList() {
  // Variables
  const categories: Categories = await getCategories();

  console.log(categories);
  
  return (
    <>
    <div className="py-4 gap-[60px] grid grid-cols-3">
      {categories.categories.map((category) => (
        <div
          key={category._id}
          className="px-2.5 py-4 hover:border-b-2 relative hover:border-softpink-300 hover:bg-gradient-to-t from-softpink-300/25 to-transparent transition-all duration-300"
        >
          <Link href={`/categories/${category._id}`} className="gap-2.5 col-span-1 flex">
            {/*category*/}
            <h3 className="text-8xl font-great text-softpink-200 absolute transform z-0 dark:text-zinc-600">
              Category
            </h3>
            {/* image*/}
            <Image
              src={img}
              alt="gift image"
              width={109.47}
              height={111}
              className="h-[111px] z-10"
            />
            {/*content */}
            <div className="py-5 z-20">
              {/*name*/}
              <h3 className="text-maroon-700 text-4xl font-semibold capitalize dark:text-softpink-300">
                {category.name}
              </h3>
              {/*productsCount*/}
              <h5 className="text-zinc-400 text-sm font-medium">
                {category.productsCount} products
              </h5>
              {/*icon*/}
              <div className="bg-maroon-700 rounded-full flex items-center justify-center size-10 absolute top-1 end-1 dark:bg-softpink-300">
                <Image src={category.image} alt={category.name} width={30} height={30} />
              </div>
            </div>
          </Link>
        </div>
      ))}

    </div>
    <div className="py-4 gap-[60px] grid grid-cols-3">
      {categories.categories.map((category) => (
        <div
          key={category._id}
          className="px-2.5 py-4 hover:border-b-2 relative hover:border-softpink-300 hover:bg-gradient-to-t from-softpink-300/25 to-transparent transition-all duration-300"
        >
          <Link href={`/categories/${category._id}`} className="gap-2.5 col-span-1 flex">
            {/*category*/}
            <h3 className="text-8xl font-great text-softpink-200 absolute transform z-0 dark:text-zinc-600">
              Category
            </h3>
            {/* image*/}
            <Image
              src={img}
              alt="gift image"
              width={109.47}
              height={111}
              className="h-[111px] z-10"
            />
            {/*content */}
            <div className="py-5 z-20">
              {/*name*/}
              <h3 className="text-maroon-700 text-4xl font-semibold capitalize dark:text-softpink-300">
                {category.name}
              </h3>
              {/*productsCount*/}
              <h5 className="text-zinc-400 text-sm font-medium">
                {category.productsCount} products
              </h5>
              {/*icon*/}
              <div className="bg-maroon-700 rounded-full flex items-center justify-center size-10 absolute top-1 end-1 dark:bg-softpink-300">
                <Image src={category.image} alt={category.name} width={30} height={30} />
              </div>
            </div>
          </Link>
        </div>
      ))}

    </div>
    <PaginationComponent metaData={categories.metadata} />
    </>
  );
}
