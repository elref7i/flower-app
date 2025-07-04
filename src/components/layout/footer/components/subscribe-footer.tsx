import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SubscribeFooter() {
  //Transitions
  const t = useTranslations();

  return (
    <div className="flex-2 space-y-5">
      {/* Title */}
      <div>
        {" "}
        <h2 className="text-[18px]  font-semibold text-softpink-300 capitalize">
          Get<span className="text-maroon-50">20%</span> Off Discount Coupon
        </h2>
        <p className="text-sm text-zinc-500">{t("by-subscribing-to-our-newsletter")}</p>
      </div>

      {/* Input Suvscribe */}
      <div className="relative ">
        <Input
          type="email"
          placeholder="Enter Your Email"
          className="text-white bg-zinc-600 placeholder:text-zinc-400 dark:bg-zinc-800 rounded-[30px] border-none h-[38px] w-[375px]"
        />
        <Button
          className="rounded-[30px] absolute right-0 top-1/2 -translate-y-1/2"
          variant={"default"}
        >
          {t("subscribe")}
          <span>
            <ArrowRight size={16} />
          </span>
        </Button>
      </div>
    </div>
  );
}
