import { JSON_HEADER } from "@/lib/constants/api.constants";
import { LogOutResponse } from "@/lib/types/auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });

  const response = await fetch(`${process.env.API!}auth/logout`, {
    headers: {
      Authorization: `Bearer ${token?.token || ""}`,
      ...JSON_HEADER,
    },
  });

  const payload: LogOutResponse = await response.json();
  console.log(payload);

  return NextResponse.json(payload, { status: response.status });
}
