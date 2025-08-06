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
