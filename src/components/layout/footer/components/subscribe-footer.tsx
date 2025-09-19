import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SubscribeFooter() {
  //Translation
  const t = useTranslations();

  return (
    <div className="flex-1 lg:flex-2 space-y-4 sm:space-y-5">
      {/* Title */}
      <div>
        <h2 className="responsive-text-base font-semibold text-softpink-300 capitalize">
          {t.rich("get-discount-coupon", {
            span: (value) => <span className="text-maroon-50">{value}</span>,
            percent: 0.2,
          })}
        </h2>
        <p className="responsive-text-sm text-zinc-500 mt-1">
          {t("by-subscribing-to-our-newsletter")}
        </p>
      </div>

      {/* Input Subscribe */}
      <div className="relative">
        {/* Input */}
        <Input
          type="email"
          placeholder="Enter Your Email"
          className="text-white bg-zinc-600 placeholder:text-zinc-400 dark:bg-zinc-800 rounded-[30px] border-none h-10 sm:h-11 w-full pr-24 sm:pr-28"
        />

        {/* Button */}
        <Button
          className="rounded-[30px] absolute right-0 top-1/2 -translate-y-1/2 h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm"
          variant={"default"}
        >
          <span className="hidden sm:inline">{t("subscribe")}</span>
          <span className="sm:hidden">Sub</span>

          {/* Icon */}
          <span className="ml-1">
            <ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </span>
        </Button>
      </div>
    </div>
  );
}
