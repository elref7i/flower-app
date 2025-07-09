import { fetchOccasions } from "@/lib/api/occasions.api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.nextUrl);
  const limit = searchParams.get("limit") || "";
  const page = searchParams.get("page") || "";
  const payload = await fetchOccasions({ page, limit });
  return NextResponse.json(payload);
}
