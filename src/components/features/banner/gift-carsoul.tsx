"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import img1 from "@/../public/assets/imgs/image 3.png";
import img2 from "@/../public/assets/imgs/image 4.png";
import img3 from "@/../public/assets/imgs/image 8.png";
import img4 from "@/../public/assets/imgs/image 9.png";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function GiftCarousol() {
  const slides = [
    {
      src: img1,
      title: "special gifts",
    },
    {
      src: img2,
      title: "special gifts",
    },
    {
      src: img3,
      title: "special gifts",
    },
    {
      src: img4,
      title: "special gifts",
    },
  ];
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const t = useTranslations("banner");

  useEffect(() => {
    if (!carouselApi) return;
    setCurrent(carouselApi.selectedScrollSnap());

    const onSelect = () => setCurrent(carouselApi.selectedScrollSnap());
    carouselApi.on("select", onSelect);

    return () => {
      carouselApi?.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <div className="rounded-2xl">
      <Carousel
        opts={{ align: "start", loop: false }}
        dir="ltr"
        className="relative rounded-2xl overflow-hidden"
        setApi={setCarouselApi}
      >
        {/*content*/}
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={i} className="relative rounded-2xl overflow-hidden">
              {/*Image*/}
              <Image
                src={slide.src}
                width={956}
                height={440}
                alt={slide.title}
                className="w-full h-[470px] object-cover"
              />
              {/*overlay*/}
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-1 z-20 p-4">
                {/*title*/}
                <h3 className="text-white text-4xl font-semibold my-2">{t("title")}</h3>
                {/*description*/}
                <h5 className="text-white text-base font-normal mb-3">{t("description")}</h5>
                {/*button*/}
                <Button
                  variant="secondary"
                  className="rounded-[10px] py-2.5 px-4 my-3 gap-1.5 text-maroon-700 font-base font-normal"
                >
                  {t("buying-button")}
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/*custom arrows */}
        <div className="flex justify-between absolute bottom-5 right-6 z-10 bg-maroon-50  rounded-full shadow-md">
          <ChevronLeft
            className={`size-[30px] ${
              carouselApi?.canScrollPrev()
                ? " text-maroon-700 cursor-pointer"
                : " text-zinc-500 cursor-not-allowed"
            }`}
            onClick={() => carouselApi?.scrollPrev()}
          />
          <ChevronRight
            className={`size-[30px] ${
              carouselApi?.canScrollNext()
                ? " text-maroon-700 cursor-pointer"
                : " text-zinc-500 cursor-not-allowed"
            }`}
            onClick={() => carouselApi?.scrollNext()}
          />
        </div>

        {/* Custom Dots */}
        <div className="absolute top-6 right-6 z-10 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => carouselApi?.scrollTo(index)}
              className={`h-2.5 rounded-[46.6px] transition-all duration-300 ${
                current === index ? "bg-maroon-600 w-9" : "bg-maroon-50 w-2.5"
              }`}
            ></div>
          ))}
        </div>
      </Carousel>
    </div>
  );
}
