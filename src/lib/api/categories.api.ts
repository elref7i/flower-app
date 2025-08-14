export async function getCategories() {
  const response = await fetch(`${process.env.API}/categories`);
  const categories = await response.json();
  if (!response.ok) throw new Error("Error:failed to get categories");
  return categories;
}

export async function getCategoryById(id: string) {
  const response = await fetch(`${process.env.API}/categories/${id}`);
  const category = await response.json();
  if (!response.ok) throw new Error("Error:failed to get category");
  return category.category;
}

export async function getCategoriesPaginated(pageParam = 1, search = "") {
  const response = await fetch(
    `https://flower.elevateegy.com/api/v1/categories?page=${pageParam}&limit=8&search=${search}`,
  );

  const payload: APIResponse<PaginatedResponse<Category>> = await response.json();
  if ("error" in payload) throw new Error(payload.error);
  return payload;
}
