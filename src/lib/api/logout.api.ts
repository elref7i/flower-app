import { JSON_HEADER } from "../constants/api.constants";
import { LogOutResponse } from "../types/auth-api";
import getTokenFromCookies from "../utils/get-cookies-token";

export default async function logOut() {
  const token = await getTokenFromCookies();
  const response = await fetch(`${process.env.BASE_API}/auth/logout`, {
    method: "Get",
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${token}`,
    },
  });
  const payload: LogOutResponse = await response.json();

  if ("error" in payload) throw new Error(payload.error || "Can't Log Out");
  return payload;
}
