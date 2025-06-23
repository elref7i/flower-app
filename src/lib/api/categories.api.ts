import { convertSearchParams } from "../utils/convert-search-params";

export const getCategories = async (searchParams: SearchParams) => {
  const response = await fetch(
    `${process.env.BASE_API!}/categories?${convertSearchParams(searchParams).toString()}`,
  );

  const payload: APIResponse<Categories> = await response.json();

  console.log(payload);

  return payload;
};
