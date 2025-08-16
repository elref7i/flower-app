"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";

export async function deleteProduct(id: string) {
  const token = await getTokenFromCookies();

  const response = await fetch(`${process.env.API!}/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token?.token}`,
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<ProducteDeletedResponse> = await response.json();

  if ("error" in payload) throw new Error(payload.error);

  return payload;
}
