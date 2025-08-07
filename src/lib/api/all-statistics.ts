import getTokenFromCookies from "../utils/get-cookies-token";

// Fetch All statistics
export async function getAllStatistics() {
  try {
    // get user token
    // const token = await getTokenFromCookies();
    // if (!token) throw new Error("You should signin");

    // Response
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/statistics`, {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjg5MDg3MWVhOGJjYTMwN2Y5ZDgyNDZlIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTQzMDIyMzh9.0KS_SHTxueVBae8aOyWE9FXM48DMRMkoKgAjZ3NUapw`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Server Error");

    // payload
    const payload: APIResponse<AllStatisticsResponse> = await response.json();
    if ("error" in payload) throw new Error(payload.error || "Can't fetch data");

    return payload;
  } catch (error) {
    console.log(error);
    return { message: error instanceof Error ? error.message : "Can't get data" };
  }
}