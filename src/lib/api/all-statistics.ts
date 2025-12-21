import getTokenFromCookies from "../utils/get-cookies-token";

export async function getAllStatistics() {
  try {
    const token = await getTokenFromCookies();
    // console.log("TOKEN FROM COOKIES:", token);

    if (!token) throw new Error("You should signin");

    const response = await fetch(`${process.env.API}/statistics`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token?.token || token}`,
        "Content-Type": "application/json",
      },
    });

    // console.log("RESPONSE STATUS:", response.status);
    const payload = await response.json();
    console.log("PAYLOAD:", payload);

    if (!response.ok) throw new Error("Server Error");
    if ("error" in payload) throw new Error(payload.error || "Can't fetch data");

    return payload;
  } catch (error) {
    console.log("FETCH ERROR:", error);
    return { message: error instanceof Error ? error.message : "Can't get data" };
  }
}
