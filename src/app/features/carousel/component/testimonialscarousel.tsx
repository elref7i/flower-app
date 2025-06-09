// TestimonialsCarousel.jsx]
"use client"
import { Card, CardContent } from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import AutoPlayIndicator from "./autoplayIndicator";
import Image from 'next/image';

export default function TestimonialsCarousel({ testimonials }) {
  const [api, setApi] = useState();
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (api) {
      api.scrollPrev();
      setIsAutoPlaying(false);
    }
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
      setIsAutoPlaying(false);
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const updateScrollButtons = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateScrollButtons();
    api.on("select", updateScrollButtons);
    api.on("reInit", updateScrollButtons);

    return () => {
      api.off("select", updateScrollButtons);
      api.off("reInit", updateScrollButtons);
    };
  }, [api]);

  useEffect(() => {
    if (!api || !isAutoPlaying) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [api, isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div className="bg-[#FBEAEA] rounded-lg p-12 min-h-[400px] flex items-center relative dark:bg-[#3F3F46]">
      <div 
        className="w-full pt-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Carousel 
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: false,
            slidesToScroll: 1,
            skipSnaps: false,
            dragFree: true,
          }}
        >
          <CarouselContent className="-ml-6 ">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-6 basis-1/3 md:basis-1/2  lg:basis-1/3">
                <div className="relative">
                  {/* Avatar positioned outside the card */}
                  <div className="absolute   left-1/2 transform -translate-x-1/2 z-10 w-[120px] h-[120px]">
                 <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-[120px] h-[120px] rounded-full object-cover border-4 border-white shadow-md"
                      loading="lazy"
                    />
                  </div>
                
                
                  
                  <Card className="h-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  
                    <CardContent className="p-6 pt-28 h-full flex flex-col min-h-[280px]">
                       
                        {/* name of avatar */}
                          <div className="text-center mt-2">
                         {testimonial.name}
                           </div>
                           
                      {/* Star Rating */}
                      <div className="flex justify-center mb-6">
                        <Star fill="#FBA707" className="text-[#FBA707]" />
                        <Star fill="#FBA707" className="text-[#FBA707]" />
                        <Star fill="#FBA707" className="text-[#FBA707]" />
                        <Star className="text-[#FBA707]" />
                      </div>

                      {/* Review Text */}
                      <div className="flex-1 mb-6 flex items-center">
                        <p className="text-gray-700 text-sm leading-relaxed text-center">
                          {testimonial.text}
                        </p>
                      </div>

                      {/* Date */}
                      <div className="text-center mt-auto">
                        <p className="text-gray-400 text-xs font-medium">
                          {testimonial.date}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation Arrows */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center ${
              !canScrollPrev 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-50 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center ${
              !canScrollNext 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-50 active:scale-95'
            }`}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </Carousel>
      </div>

      {/* Auto-play Indicator */}
      <AutoPlayIndicator isAutoPlaying={isAutoPlaying} />
    </div>
  );
}