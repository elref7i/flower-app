import { Card } from "@/components/ui/card";
import AddCategoryForm from "../_components/Add-Category-Form";
import { getTranslations } from "next-intl/server";

export default async function page() {
  const t = await getTranslations();
  return (
    <>
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-900 ms-9">{t("add-new-category-button")}</h1>

      {/* Card */}
      <Card className="p-6 mt-6 mx-8 border-none">
        {/* Form */}
        <AddCategoryForm />
      </Card>
    </>
  );
}
