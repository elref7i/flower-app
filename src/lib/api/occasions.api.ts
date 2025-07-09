import Occasions from "@/components/features/occasions/occasions";

export async function fetchOccasions({ limit = "", page = "" }: { limit?: string; page?: string }) {
  try {
    const response: APIResponse<PaginatedResponse<FetchOccasionsResponse>> = await fetch(
      `${process.env.BASE_API}/occasions?limit=${limit}&page=${page}`,
    );
    if (!response.ok) throw new Error("Failed to fetch occasions");
    const payload = await response.json();

    return payload;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return { message: "Can't Get Occasions", Occasions: [] };
  }
}
