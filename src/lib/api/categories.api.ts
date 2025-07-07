<<<<<<< HEAD
import { convertSearchParams } from "../utils/convert-search-params";

export const getCategories = async ({ page }: { page: number }) => {
  const response = await fetch(`${process.env.BASE_API!}/categories?page=${page}`);

  const payload: APIResponse<Categories> = await response.json();

  console.log(payload);

  return payload;
};
=======
export async function getCategories() {
  const response = await fetch(`${process.env.API}/categories`);
  const categories = await response.json();
  if (!response.ok) throw new Error("Error:failed to get categories");
  return categories.categories;
}

export async function getCategoryById(id: string) {
  const response = await fetch(`${process.env.API}/categories/${id}`);
  const category = await response.json();
  if (!response.ok) throw new Error("Error:failed to get category");
  return category.category;
}
>>>>>>> fcad3a7e8e9e2d2e86ef82d952b485a29b1483d7
