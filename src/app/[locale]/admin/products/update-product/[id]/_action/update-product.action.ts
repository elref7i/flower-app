"use server";

import { TUpdateProductForm } from "@/lib/schema/products-cu.schema";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";

export async function updateProductAction(values: TUpdateProductForm, id: string) {
  const token = await getTokenFromCookies();
  if (!token) throw new Error("You are not loggedin ");
  if (token.user.role !== "isSuperAdmin") throw new Error("You are not authorized");
  const response = await fetch(`${process.env.API}/products/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token.token}`,
    },
    body: JSON.stringify(values),
  });

  const payload = await response.json();
  if ("error" in payload) throw new Error(payload.error || "Can't update product");
  return payload;
}
