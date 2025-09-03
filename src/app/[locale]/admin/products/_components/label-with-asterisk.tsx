import { FormLabel } from "@/components/ui/form";
import { Asterisk } from "lucide-react";
import { useTranslations } from "next-intl";

// add asterisk icon to label
export default function LabelWithAsterisk({ title }: { title: string }) {
  const t = useTranslations("products-cu");
  return (
    <FormLabel className="flex capitalize items-start mt-1 text-sm gap-1 font-medium">
      {t(title)} <Asterisk className="text-red-600 size-3 mt-[2px]" />
    </FormLabel>
  );
}
