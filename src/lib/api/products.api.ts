export async function getAllProducts() {
  try {
    const response = await fetch(`${process.env.API!}/products`);

    const payload: APIResponse<PaginatedResponse<Product[]>> = await response.json();

    if ("error" in payload) throw new Error(payload.error);

    return payload;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function getAllProductsByCategory(id: string) {
  try {
    const response = await fetch(`${process.env.API!}/products?category=${id}`);
    const products = await response.json();
    if (!response.ok) throw new Error("Error:failed to get products");
    return products.products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Top Selling Products
export async function fetchProductStats(pageParam = 1) {
  const response = await fetch(
    `https://flower.elevateegy.com/api/v1/products?sort=-sold&page=${pageParam}&limit=8`,
  );
  const payload: APIResponse<PaginatedResponse<Product>> = await response.json();
  if ("error" in payload) throw new Error(payload.error);
  return payload;
}

// Low Stock Products
export async function fetchLowStockProducts(pageParam = 1) {
  const response = await fetch(
    `https://flower.elevateegy.com/api/v1/products?sort=quantity&page=${pageParam}&limit=9`,
  );

  const payload: APIResponse<PaginatedResponse<AllProducts>> = await response.json();
  if ("error" in payload) throw new Error(payload.error);

  // console.log(payload);

  return payload.products;
}

// Popular Products
export async function fetchPopularProducts(occasionId?: string) {
  try {
    const params = new URLSearchParams({
      sort: "sold",
      limit: "12",
    });

    if (occasionId) params.append("occasion", occasionId);

    const response = await fetch(`${process.env.API!}/products?${params}`);

    const payload: APIResponse<PaginatedResponse<AllProducts>> = await response.json();

    if ("error" in payload) throw new Error(payload.error);

    return payload.products;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getProductReviews(productId: string) {
  const response = await fetch(`${process.env.API!}/products/${productId}/reviews`);
  const payload: APIResponse<ProductReview> = await response.json();
  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload;
}

export async function getProductById(id: string) {
  const response = await fetch(`${process.env.API}/products/${id}`);
  const payload: APIResponse<{ product: Product }> = await response.json();
  if ("error" in payload) throw new Error(payload.error || "Can't get product");
  return payload.product;
}
