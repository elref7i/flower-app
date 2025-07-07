"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";
import { revalidateTag } from "next/cache";

export async function deleteAllNotifications() {
  const token = await getTokenFromCookies();
  const response = await fetch(`${process.env.API}/notifications/clear-all`, {
    method: "DELETE",
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${token?.token} `,
    },
  });

  const payload: APIResponse<ClearAllNotificationsResponse> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }
  revalidateTag("user-notifications");

  return payload;
}
