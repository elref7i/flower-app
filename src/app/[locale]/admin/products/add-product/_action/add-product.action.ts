"use server";

import getTokenFromCookies from "@/lib/utils/get-cookies-token";

export async function addProductAction(form: FormData) {
  const token = await getTokenFromCookies();
  if (token?.user.role !== "isSuperAdmin") throw new Error("You are not authorized ");
  const response = await fetch(`${process.env.API}/products`, {
    method: "POST",
    body: form,
    headers: {
      authorization: `Bearer ${token?.token}`,
    },
  });
  const payload = await response.json();
  return payload;
}
