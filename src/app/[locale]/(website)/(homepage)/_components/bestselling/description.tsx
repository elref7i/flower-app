import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import React from "react";

export default function Description() {
  const t = useTranslations();
  return (
    <div className="flex flex-col w-72 h-full">
      {/* Title */}
      <p className="text-[16px] tracking-widest text-softpink-500 font-bold  uppercase dark:text-maroon-400">
        {t("Best Selling")}
      </p>

      <div className="mt-3 mb-3">
        {/* HeadLine */}
        <h2 className="text-3xl font-bold leading-snug text-maroon-700 dark:text-softpink-200 ">
          {t.rich("check out", {
            span: (value) => (
              <span className="text-softpink-500 dark:text-maroon-400">{value}</span>
            ),
          })}{" "}
          {t("every-one")}
          {t.rich("buying", {
            span: (value) => (
              <span className="text-softpink-500 dark:text-maroon-400">{value}</span>
            ),
          })}{" "}
          {t("right-now")}
        </h2>

        {/* Content */}
        <p className="text-zinc-500 text-sm font-normal  dark:text-zinc-400 pb-2 h-24">
          {t.rich("paragraph", {
            br: (value) => (
              <>
                {value} <br />
              </>
            ),
          })}
        </p>
      </div>

      {/*Button*/}
      <Button className=" mt-16 bg-maroon-600 hover:bg-maroon-700 text-white px-4 py-2 rounded-[10px] flex items-center gap-2 text-base font-normal dark:text-zinc-800 ">
        {t("gifts")}{" "}
        {t.rich("arrow", {
          span: (value) => <span className="text-lg">{value}</span>,
        })}
      </Button>
    </div>
  );
}
