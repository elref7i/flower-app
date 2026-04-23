"use server";

import getTokenFromCookies from "@/lib/utils/get-cookies-token";
import { revalidateTag } from "next/cache";

export async function deleteCartItem(productId: string) {
  const token = await getTokenFromCookies();
  if (!token) throw new Error("You are not logged in");

  const response = await fetch(`${process.env.API}/cart/${productId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token?.token}`,
    },
  });

  const payload: APIResponse<CartInfo> = await response.json();
  if ("error" in payload) throw new Error(payload.error || "Can't delete item");

  revalidateTag("cartInfo");
  return payload;
}
