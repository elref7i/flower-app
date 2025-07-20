"use server";

import { cookies } from "next/headers";
import { JSON_HEADER } from "@/lib/constants/api.constants";
import { decode } from "next-auth/jwt";

export const getUserAddressesAction = async () => {
  const authCookie = cookies().get("next-auth.session-token")?.value;

  const token = await decode({
    secret: process.env.AUTH_SECRET!,
    token: authCookie,
  });

  if (!token) {
    throw new Error("Unauthorized: No access token found");
  }

  const response = await fetch(`${process.env.API}/addresses`, {
    method: "GET",
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${token?.token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch addresses");
  }

  const data = await response.json();
  return data.addresses as Address[];
};
