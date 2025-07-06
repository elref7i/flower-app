"use client";
import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useLocale, useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import client1 from "@assets/imgs/client1.png";
import client2 from "@assets/imgs/client2.png";
import client3 from "@assets/imgs/client3.png";
import client4 from "@assets/imgs/client4.jpg";
import TestmonialCard from "./testmonial-card";

export function TestimonilalCarousel() {
  // Queries
  // const { testimonials, isLoading, error } = useTestimonials();
  // Translations
  const locale = useLocale();
  const t = useTranslations();

  // Plugins
  const plugin = React.useRef(
    AutoScroll({
      startDelay: 200,
      stopOnInteraction: false,
      speed: 1.5,
      stopOnMouseEnter: true,
    }),
  );

  // Clients Variables
  const clients = [
    {
      photo: client1,
      name: t("jake-miller-0"),
      review: t("review-1"),
    },
    {
      photo: client2,
      name: t("tyler-brooks"),
      review: t("review-2"),
    },
    {
      photo: client3,
      name: t("max-turner"),
      review: t("review-3"),
    },
    {
      photo: client4,
      name: t("tisabelle-laurent"),
      review: t("review-4"),
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        loop: true,
        direction: locale === "ar" ? "rtl" : "ltr",
        align: "start",
        containScroll: "trimSnaps",
      }}
      className="w-full"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {/* Slides */}
        {clients.map((client, index) => (
          <CarouselItem key={index} className="px-2 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="border-none bg-transparent shadow-none">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {/* Testimonials Card */}
                  <TestmonialCard client={client} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Buttons Navigations */}
      <CarouselPrevious
        variant={"outline"}
        className="absolute -left-12 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full"
      />
      <CarouselNext
        variant={"outline"}
        className="absolute -right-12 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full"
      />
    </Carousel>
  );
}
