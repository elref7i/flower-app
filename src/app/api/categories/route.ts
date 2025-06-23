import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  //Variables
  const searchParams = req.nextUrl.searchParams;
  console.log("searchParamsR", searchParams.toString());

  const response = await fetch(`${process.env.BASE_API}/categories?${searchParams.toString()}`);

  const payload: APIResponse<Categories> = await response.json();

  return NextResponse.json(payload, { status: response.status });
}
