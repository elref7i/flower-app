export async function fetchOccasions() {
  try {
    const response = await fetch(`${process.env.API!}/occasions?limit=6`);
    const payload: APIResponse<Occasions> = await response.json();

    if ("error" in payload) throw new Error(payload.error);

    return payload.occasions;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
}

export async function getPaginatedOccasions(limit = "", page = "") {
  try {
    const response = await fetch(`${process.env.BASE_API}/occasions?limit=${limit}&page=${page}`);
    if (!response.ok) throw new Error("Failed to fetch occasions");
    const payload: APIResponse<PaginatedResponse<Occasion[]>> = await response.json();
    if ("error" in payload) throw new Error(payload.error || "Failed to fetch occasions");
    if (payload.message !== "success") throw new Error("Failed to fetch occasions");

    return payload;
  } catch (error) {
    return { message: "Can't get occasions", occasions: [] };
  }
}
