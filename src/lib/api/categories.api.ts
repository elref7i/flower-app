import { convertSearchParams } from "../utils/convert-search-params";

export const getCategories = async ({ page }: { page: number }) => {
  const response = await fetch(`${process.env.BASE_API!}/categories?page=${page}`);

  const payload: APIResponse<Categories> = await response.json();

  console.log(payload);

  return payload;
};
