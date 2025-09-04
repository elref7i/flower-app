import getTokenFromCookies from "../utils/get-cookies-token";

export async function getCartItems() {
  const token = await getTokenFromCookies();
  if (!token) return { message: "you are not logged in", numOfCartItems: 0 };
  try {
    const response = await fetch(`${process.env.API!}/cart`, {
      next: { tags: ["cartInfo"] },
      headers: {
        Authorization: `Bearer ${token.token}`,
        "Content-Type": "application/json",
      },
    });

    const payload: APIResponse<CartInfo> = await response.json();

    if ("error" in payload) throw new Error(payload.error || "Can't Get Cart Items");
    return payload;
  } catch (error) {
    return { message: error || "Can't get cart items" };
  }
}
