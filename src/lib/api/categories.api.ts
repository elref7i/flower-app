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

export async function getPaginatedCategories(limit = "", page = "") {
  try {
    const response = await fetch(`${process.env.BASE_API}/categories?limit=${limit}&page=${page}`);
    if (!response.ok) throw new Error("Error:failed to get categories");
    const payload: APIResponse<PaginatedResponse<Categories[]>> = await response.json();
    if (payload.message !== "success") throw new Error("Can't get categories");
    return payload;
  } catch (error) {
    return { message: "Can't get Categories", categories: [] };
  }
}

export async function getCategoriesPaginated(pageParam = 1, search = "") {
  const response = await fetch(
    `https://flower.elevateegy.com/api/v1/categories?page=${pageParam}&limit=8&search=${search}`,
  );

  const payload: APIResponse<PaginatedResponse<Category>> = await response.json();
  if ("error" in payload) throw new Error(payload.error);
  return payload;
}
