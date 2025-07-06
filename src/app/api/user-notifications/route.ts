import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { JSON_HEADER } from "@/lib/constants/api.constants";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const pageParam = searchParams.get("page") || "1";

  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const response = await fetch(`${process.env.API}/notifications/user?limit=6&page=${pageParam}`, {
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${token?.token}`,
    },
    next: {
      tags: ["user-notifications"],
    },
  });

  const payload = await response.json();

  return NextResponse.json(payload);
}
