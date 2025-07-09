import getCategories from "@/lib/api/categories";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.nextUrl);
  const limit = searchParams.get("limit") || "";
  const page = searchParams.get("page") || "";
  const payload = await getCategories({ page, limit });
  return NextResponse.json(payload);
}
