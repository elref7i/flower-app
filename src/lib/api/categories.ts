export default async function getCategories({
  limit = "",
  page = "",
}: {
  limit?: string;
  page?: string;
}) {
  try {
    const res = await fetch(`${process.env.BASE_API}/categories?limit=${limit}&page=${page}`);

    if (!res.ok) {
      throw new Error(`External API error: ${res.statusText}`);
    }
    const payload: APIResponse<PaginatedResponse<CategoriesResponse>> = await res.json();

    if (payload.message !== "success") {
      throw new Error(payload.message || "Unexpected API format");
    }

    return payload;
  } catch (error) {
    console.error("Error in GET categories:", error);
    return { message: "Can't Get Categories", categories: [] };
  }
}
