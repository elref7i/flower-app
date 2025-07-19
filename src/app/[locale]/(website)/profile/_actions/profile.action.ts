"use server";

import { ChangePasswordFields } from "@/lib/schema/profile.schema";
import { ChangePasswordResponse } from "@/lib/types/auth";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";

export const changePassword = async (values: ChangePasswordFields) => {
  const token = await getTokenFromCookies();

  const response = await fetch(`${process.env.API!}/auth/change-password`, {
    cache: "no-store",
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token?.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const payload: APIResponse<ChangePasswordResponse> = await response.json();

  if ("error" in payload) throw new Error(payload.error);

  return payload;
};
