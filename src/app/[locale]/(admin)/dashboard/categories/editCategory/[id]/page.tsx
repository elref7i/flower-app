import { getCategoryById } from "@/lib/api/categories.api";
import EditCategoryForm from "../../_components/Edit-Category-Form";

export default async function EditCategoryPage({ params }: { params: { id: string } }) {
  const category = await getCategoryById(params.id);

  return (
    <div className=" mx-auto py-8 ">
      {/* Form */}
      <EditCategoryForm id={params.id} initialName={category.name} />
    </div>
  );
}
