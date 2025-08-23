"use server";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function getTokenFromCookies() {
  // Get token from cookies
  const cookiesToken = cookies().get("next-auth.session-token")?.value;

  // Decode token
  const token = await decode({
    token: cookiesToken,
    secret: process.env.AUTH_SECRET!,
  });

  // If token doesn't exit return undefined
  if (!token) return undefined;

  return token;
}
