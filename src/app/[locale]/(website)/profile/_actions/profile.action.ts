"use server";

import { ChangePasswordFields, EditProfileSchemaFields } from "@/lib/schema/profile.schema";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";
import { revalidatePath } from "next/cache";

export const editProfile = async (values: EditProfileSchemaFields) => {
  const token = await getTokenFromCookies();

  const response = await fetch(`${process.env.API!}/auth/editProfile`, {
    cache: "no-store",
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token?.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const payload: APIResponse<EditProfileResponse> = await response.json();

  if ("error" in payload) throw new Error(payload.error);

  return payload;
};

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
export const deleteAcount = async () => {
  const token = await getTokenFromCookies();

  const response = await fetch(`${process.env.API!}/auth/deleteMe`, {
    cache: "no-store",
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token?.token}`,
      "Content-Type": "application/json",
    },
  });

  const payload: APIResponse<ChangePasswordResponse> = await response.json();

  if ("error" in payload) throw new Error(payload.error);

  return payload;
};
