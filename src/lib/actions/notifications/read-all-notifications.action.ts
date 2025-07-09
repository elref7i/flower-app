"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";
import { revalidateTag } from "next/cache";

export async function readAllNotifications() {
  const token = await getTokenFromCookies();
  const response = await fetch(`${process.env.API}/notifications/mark-read`, {
    method: "POST",
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${token?.token}`,
    },
  });

  const payload: APIResponse<MarkAllNotificationsReadResponse> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }
  revalidateTag("user-notifications");
  return payload;
}
