"use server";

import getTokenFromCookies from "@/lib/utils/get-cookies-token";

import { revalidateTag } from "next/cache";

export async function addToCart({ product, quantity }: { product: string; quantity: number }) {
  const token = await getTokenFromCookies();

  if (!token) throw new Error("You are not logged in");

  const response = await fetch(`${process.env.API}/cart`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product, quantity }),
  });
  const payload: APIResponse<CartInfo> = await response.json();
  if (!("error" in payload) && payload.message === "success") {
    revalidateTag("cartInfo");
  }
  return payload;
}
