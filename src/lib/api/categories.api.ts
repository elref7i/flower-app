export async function getCategories() {
  const response = await fetch(`${process.env.API}/categories`);
  const categories = await response.json();
  if (!response.ok) throw new Error("Error:failed to get categories");
  return categories;
}

export async function getCategoryById(id: string) {
  const response = await fetch(`${process.env.API!}/categories/${id}`);
  const category = await response.json();
  if (!response.ok) throw new Error("Error:failed to get category");
  return category.category;
}
