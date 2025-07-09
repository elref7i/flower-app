import { JSON_HEADER } from "@/lib/constants/api.constants";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const respone = await fetch(`${process.env.API}/notifications/unread-count`, {
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${token?.token} `,
    },
  });

  const payload = await respone.json();

  return NextResponse.json(payload);
}
