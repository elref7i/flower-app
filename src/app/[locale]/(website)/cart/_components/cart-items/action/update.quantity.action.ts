"use server";

import getTokenFromCookies from "@/lib/utils/get-cookies-token";
import { revalidateTag } from "next/cache";

export async function updateQuantityAction(productId: string, quantity: number) {
  const token = await getTokenFromCookies();
  if (!token) throw new Error("You are not logged in");
  const response = await fetch(`${process.env.API}/cart/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.token}`,
    },
    body: JSON.stringify({ quantity }),
  });
  const payload = await response.json();
  if (payload.message === "success") revalidateTag("cartInfo");
  return payload;
}
