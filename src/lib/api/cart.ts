import getTokenFromCookies from "../utils/get-cookies-token";

export async function getCartItems() {
  //   const token = await getTokenFromCookies();
  //   if (!token) return { message: "you are not logged in", numOfCartItems: 0 };

  try {
    const response = await fetch(`${process.env.API}/cart`, {
      next: { tags: ["cartInfo"] },
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjg1YzFjNDhhOGJjYTMwN2Y5Y2JjOTBmIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTMxOTE2NjR9._o0yNIbJXfp-iP07KoOIvZDYrFn2jxBR4LcWkl-GrLI`,
        "Content-Type": "application/json",
      },
    });

    const payload: APIResponse<CartInfo> = await response.json();

    console.log("zzzzzzzzzz", payload);

    if ("error" in payload) throw new Error(payload.message || "Can't Get Cart Items");
    return payload;
  } catch (error) {
    return { message: error || "Can't get cart items" };
  }
}
