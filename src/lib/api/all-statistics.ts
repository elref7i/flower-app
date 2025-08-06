import getTokenFromCookies from "../utils/get-cookies-token";

// Fetch All statistics
export async function getAllStatistics() {
  try {
    // get user token
    const token = await getTokenFromCookies();
    if (!token) throw new Error("You should signin");

    // Response
    const response = await fetch(`${process.env.API}/statistics`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Server Error");

    // payload
    const payload: APIResponse<AllStatisticsResponse> = await response.json();
    if ("error" in payload) throw new Error(payload.message || "Can't fetch data");

    return payload;
  } catch (error) {
    console.log(error);
    return { message: error instanceof Error ? error.message : "Can't get data" };
  }
}
