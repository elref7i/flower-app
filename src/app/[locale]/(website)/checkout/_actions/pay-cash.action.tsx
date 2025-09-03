"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function payByCashAction(userAddressesValue: ShippingAddress) {
  const authcookie = cookies().get("next-auth.session-token")?.value;
  const token = await decode({
    secret: process.env.AUTH_SECRET!,
    token: authcookie,
  });

  if (!token) {
    throw new Error("Unauthorized: No access token found");
  }

  const response = await fetch(`${process.env.API}/orders`, {
    method: "POST",
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${token?.token}`,
    },
    body: JSON.stringify({
      shippingAddress: userAddressesValue,
    }),
  });

  const payload = await response.json();

  if (!response.ok) {
    const message = payload?.error || "Something went wrong while creating the order";
    throw new Error(message);
  }

  return payload;
}
