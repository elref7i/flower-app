import { JSON_HEADER } from "../constants/api.constants";
import getTokenFromCookies from "../utils/get-cookies-token";


export default async function getLoggeduser() {
  // get token
  const token = await getTokenFromCookies();

  // fetch
  const response = await fetch(`${process.env.API!}/auth/profile-data`, {
    cache: "no-store",
    method: "Get",
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${token?.token}`,
    },
  });

  const payload: APIResponse<LoggedUserResponse> = await response.json();
  if ("error" in payload) throw new Error(payload.error);

  return payload;
}
