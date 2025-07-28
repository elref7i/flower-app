import React from "react";
import { useTranslations } from "next-intl";
import { TestimonilalCarousel } from "./testmonial-carousel";


export default function TestimonialSection() {
  // Teansliations
  const t = useTranslations();

  return (
    <section>
      {/* Heading */}
      <div className="my-10 text-center">
        <h2 className="text-base font-bold text-softpink-500 dark:text-maroon-400">
          {t("testimonials")}
        </h2>
        <h3 className="relative mx-auto w-fit text-4xl font-bold text-maroon-700 before:absolute before:bottom-0 before:h-[1px] before:w-[30%] before:bg-maroon-400 after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-1/2 after:w-[70%] after:rounded-e-full after:bg-maroon-100 dark:text-softpink-200 before:dark:bg-maroon-200 after:dark:bg-zinc-700 after:rtl:right-0">
          {t("real-words-from-happy-customers")}
        </h3>
      </div>
      {/* Content */}
      <section className="bg-maroon-50 dark:bg-zinc-700">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex h-[550px] items-center">
            <TestimonilalCarousel />
          </div>
        </div>
      </section>
    </section>
  );
}
