import { JSON_HEADER } from "@/lib/constants/api.constants";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";

export const deleteCategoryAction = async () => {
  const token = await getTokenFromCookies();

  const response = await fetch(`${process.env.API}/auth/deleteMe`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<DeleteCategoryResponse> = await response.json();

  if ("error" in payload) throw new Error(payload.error);

  return payload;
};
