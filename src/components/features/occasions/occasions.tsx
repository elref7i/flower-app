import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { imagepath } from "@/lib/utils/handlepathImage";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface OccasionsProps {
  occasions: Occasion[];
}
export default async function Occasions({ occasions }: OccasionsProps) {
  const t = await getTranslations("occasions");

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {occasions.map((occasion) => (
          <CarouselItem key={occasion._id} className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="p-0 border-none ">
                <CardContent className="flex aspect-square items-center   h-72  justify-center w-full relative ">
                  {/* <Link href={"./occasions"}> */}
                  {/*image*/}
                  <Image
                    src={imagepath(occasion.image)}
                    alt={occasion.name}
                    fill
                    className="w-full max-h-72 object-cover block rounded-2xl"
                  />
                  {/*overlay*/}
                  <div className="absolute inset-0 z-10 rounded-2xl  bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className=" p-3 pb-2 z-20">
                      {/*budge*/}
                      <div className="bg-maroon-50 rounded-xl inline-block text-maroon-600 font-medium text-lg py-2 px-4 my-1 gap-2.5">
                        {occasion.slug}
                      </div>
                      {/*description*/}
                      <h3 className="text-white text-2xl font-semibold my-1">{occasion.name}</h3>
                    </div>
                  </div>
                  {/* </Link> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  );
}
