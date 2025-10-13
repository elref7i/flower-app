"use server";

import { revalidateTag } from "next/cache";
import getTokenFromCookies from "../utils/get-cookies-token";

export async function clearCartItems() {
  const token = await getTokenFromCookies();
  if (!token) throw new Error("You are not logged in");
  const response = await fetch(`${process.env.API}/cart`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token.token}`,
      "Content-Type": "application/json",
    },
  });
  const payload: { message: string } = await response.json();
  if (payload.message === "success") revalidateTag("cartInfo");
  return payload;
}
