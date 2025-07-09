"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";
import { revalidateTag } from "next/cache";

export async function readNotification({ id }: { id: string }) {
  const token = await getTokenFromCookies();

  const response = await fetch(`${process.env.API}/notifications/mark-all-read`, {
    method: "POST",
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${token?.token} `,
    },
    body: JSON.stringify({
      notificationIds: [id],
    }),
  });

  const payload = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  revalidateTag("user-notifications");

  return payload;
}
