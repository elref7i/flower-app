import { Truck, RotateCcw, ShieldCheck, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getTranslations } from "next-intl/server";

export default async function ServiceFeatures() {
  const t = await getTranslations("features");
  const features = [
    {
      icon: <Truck className="text-white size-10 dark:text-black" />,
      title: t("title-one"),
      description: t("description-one"),
    },
    {
      icon: <RotateCcw className="text-white size-10 dark:text-black" />,
      title: t("title-two"),
      description: t("description-two"),
    },
    {
      icon: <ShieldCheck className="text-white size-10 dark:text-black" />,
      title: t("title-three"),
      description: t("description-three"),
    },
    {
      icon: <Headphones className="text-white size-10 dark:text-black" />,
      title: t("title-four"),
      description: t("description-four"),
    },
  ];

  return (
    <Card className="bg-maroon-50 p-10 rounded-2xl dark:bg-zinc-700">
      <CardContent className="flex justify-between items-center flex-wrap">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-center gap-4">
            {/*icon*/}
            <div className="bg-maroon-600 flex items-center justify-center size-[65px] p-4 rounded-[32.5px] dark:bg-softpink-200">
              {feature.icon}
            </div>
            {/*description*/}
            <div className="gap-[5px]">
              <h3 className="text-maroon-600 font-semibold text-xl dark:text-softpink-200">
                {feature.title}
              </h3>
              <p className="text-zinc-500 text-sm dark:text-zinc-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
