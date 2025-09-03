"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import { ChangePasswordFields, EditProfileSchemaFields } from "@/lib/schema/profile.schema";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";
import { revalidateTag } from "next/cache";

export const editProfile = async (values: EditProfileSchemaFields) => {
  // get token
  const token = await getTokenFromCookies();

  const response = await fetch(`${process.env.API!}/auth/editProfile`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token?.token}`,
      ...JSON_HEADER,
    },
    body: JSON.stringify(values),
  });

  const payload: APIResponse<EditProfileResponse> = await response.json();

  if ("error" in payload) throw new Error(payload.error);

  return payload;
};

export const changePassword = async (values: ChangePasswordFields) => {
  // get token
  const token = await getTokenFromCookies();

  const response = await fetch(`${process.env.API!}/auth/change-password`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token?.token}`,
      ...JSON_HEADER,
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
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token?.token}`,
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<ChangePasswordResponse> = await response.json();

  if ("error" in payload) throw new Error(payload.error);

  return payload;
};

export const uploadImageProfile = async (formData: FormData) => {
  const token = await getTokenFromCookies();

  const response = await fetch(`${process.env.API!}/auth/upload-photo`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token?.token}`,
    },
    body: formData,
  });

  const payload: APIResponse<ChangePasswordResponse> = await response.json();

  if ("error" in payload) throw new Error(payload.error);
  revalidateTag("profile");
  return payload;
};
