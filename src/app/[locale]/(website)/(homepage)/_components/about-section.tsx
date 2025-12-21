import Image from "next/image";
import PurblePresent from "@assets/imgs/purplepresent.png";
import BallonPresent from "@assets/imgs/ballonpresent.png";
import OrangePresent from "@assets/imgs/orangepresent.png";
import { Button } from "@/components/ui/button";
import { MoveRight, MoveLeft, Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function AboutSection() {
  // Translation
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section className=" flex gap-20 max-w-7xl mx-auto mt-32 ">
      {/* /Left Section */}
      <div className="flex gap-3 h-[376px]  my-auto flex-row px-4">
        {/* Left Pic */}
        <div className="relative w-[302px] h-full   order-first rtl:order-first">
          {/* Border layer */}
          <div className="absolute w-[286px] h-[392px] -top-3 -start-6 rotate-6  before:content-[''] before:absolute before:inset-0 before:border-4 before:border-maroon-600 before:rounded-tl-[50px] before:rounded-tr-[120px] before:rounded-br-[120px] before:rounded-bl-[120px]  rtl:scale-x-[-1] rtl:-rotate-6 before:dark:border-softpink-400"></div>

          {/* Image layer */}
          <Image
            src={PurblePresent}
            alt="purble present"
            className="relative rounded-tl-[50px] rounded-tr-[120px] rounded-br-[120px] rounded-bl-[120px] w-[302px] h-full z-10 rtl:scale-x-[-1]"
          />
        </div>

        {/* Right Pic  */}
        <div className="w-48 flex flex-col gap-3 order-last rtl:order-last ">
          <Image
            src={OrangePresent}
            alt="orange present"
            height={193}
            className="rounded-full w-full object-cover aspect-square"
          />
          <Image
            src={BallonPresent}
            alt="ballon present"
            height={144}
            className="rounded-s-[50px] rounded-e-[100px] h-36 w-full object-cover"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className=" max-w-[627px] ">
        {/* Title */}
        <h4 className="text-softpink-500 font-bold text-base tracking-wide pb-3 dark:text-maroon-400">
          {t("about-title")}
        </h4>

        {/* Headline */}
        <h2 className="text-maroon-700 font-bold text-3xl pt-3 pb-2 dark:text-softpink-200">
          {t.rich("about-section-headline", {
            highlight: (chunks) => (
              <span className="text-softpink-500 dark:text-maroon-400">{chunks}</span>
            ),
          })}
        </h2>

        {/* Content */}
        <p className="text-zinc-500 text-base font-normal">{t("about-content")}</p>

        {/* Button */}
        <Button className="bg-maroon-600 text-white my-6  w-32 font-normal dark:text-zinc-800 dark:bg-softpink-200">
          {t("about-button")} {locale == "en" ? <MoveRight /> : <MoveLeft />}
        </Button>

        {/* Features */}
        <div className="grid grid-cols-2 text-sm ">
          <div className="flex py-3 text-white gap-9">
            <Check className="text-maroon-700 dark:text-softpink-400" />
            <p className="text-zinc-800 dark:text-zinc-50">{t("competitive_prices")}</p>
          </div>

          <div className="flex py-3 text-white gap-9">
            <Check className="text-maroon-700 dark:text-softpink-400" />
            <p className="text-zinc-800 dark:text-zinc-50">{t("premium_quality")}</p>
          </div>

          <div className="flex py-3 text-white gap-9">
            <Check className="text-maroon-700 dark:text-softpink-400" />
            <p className="text-zinc-800 dark:text-zinc-50">{t("every_occasion")}</p>
          </div>

          <div className="flex py-3 text-white gap-9">
            <Check className="text-maroon-700 dark:text-softpink-400" />
            <p className="text-zinc-800 dark:text-zinc-50">{t("fast_delivery")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
