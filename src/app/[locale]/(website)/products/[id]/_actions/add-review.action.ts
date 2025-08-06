"use server";
import { JSON_HEADER } from "@/lib/constants/api.constants";
import { ProductReviewFields } from "@/lib/schema/review.schema";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";

export async function createReview({ ...values }: ProductReviewFields) {
  const token = await getTokenFromCookies();
  console.log(process.env.API);

  const response = await fetch(`${process.env.API!}/reviews`, {
    method: "POST",
    body: JSON.stringify({ ...values, product: "673e2d1b1159920171828146" }), // Assuming productID is required, replace with actual product ID
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjgyZTUzNWMxNDMzYTY2NmM4ZGU3NTY0Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzUyMzQ4OTMzfQ.uS9W9P9ffpFYVZ4YUkVbgeYP76w0NYL0_oWdyPobO-A`,
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<ProductReview> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload;
}
