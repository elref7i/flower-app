export async function fetchOccasions() {
  try {
    const response: APIResponse<PaginatedResponse<FetchOccasionsResponse>> = await fetch(
      `${process.env.API!}/occasions?limit=4`,
    );
    if (!response.ok) throw new Error("Failed to fetch occasions");
    const data = await response.json();

    return data.occasions;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
}

export async function getPaginatedOccasions(limit = "", page = "") {
  try {
    const response: APIResponse<PaginatedResponse<FetchOccasionsResponse>> = await fetch(
      `${process.env.BASE_API}/occasions?limit=${limit}&page=${page}`,
    );
    if (!response.ok) throw new Error("Failed to fetch occasions");
    const payload: APIResponse<PaginatedResponse<Occasion[]>> = await response.json();
    if (payload.message !== "success") throw new Error("Failed to fetch occasions");

    return payload;
  } catch (error) {
    return { message: "Can't get Categories", occasions: [] };
  }
}
