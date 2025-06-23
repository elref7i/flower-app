export const getCategories = async () => {
  const response = await fetch(`${process.env.BASE_API!}/categories`);

  const payload: APIResponse<Categories> = await response.json();

  console.log(payload);

  return payload;
};
