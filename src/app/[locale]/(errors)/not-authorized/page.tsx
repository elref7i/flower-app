import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React from "react";

import lock from "../../../../../public/assets/imgs/lock-shield.png";
import { useTranslations } from "next-intl";

export default function Page() {
  // Translations
  const t = useTranslations();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" flex flex-col items-center justify-center text-center space-y-6  rounded-lg shadow-sm p-8">
        {/* Shield with Lock Icon */}
        <div className="relative size-[200px] sm:size-[250px] md:size[360px]">
          <Image src={lock} alt="lock-Shield" fill className="object-cover" />
        </div>

        {/* Main Message */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl font-semibold ">
            {t("you-are-not-authorized-to-access-this-page")}
          </h1>
          <p className="text-lg md:text-xl w-fit  mx-auto text-zinc-400">
            {t("if-you-think-this-is-wrong-please-contact-the-support")}
            <Separator className="border-red-500 mt-2 mx-auto" orientation="horizontal" />
          </p>
        </div>

        {/* Go to Homepage Link */}
        <Link
          href={"/"}
          className="border text-sm p-4 rounded-md border-zinc-300 bg-zinc-50 dark:bg-zinc-500  text-black dark:text-zinc-50"
        >
          {t("go-to-homepage-0")}
        </Link>
      </div>
    </div>
  );
}
