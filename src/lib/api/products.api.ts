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

// Unified function for fetching products with various filters
export async function fetchProducts(
  options: {
    sort?: string;
    limit?: number;
    page?: number;
    occasion?: string;
    category?: string;
  } = {},
) {
  const { sort = "sold", limit = 12, page = 1, occasion, category } = options;

  try {
    const params = new URLSearchParams({
      sort,
      limit: limit.toString(),
      page: page.toString(),
    });

    if (occasion) params.append("occasion", occasion);
    if (category) params.append("category", category);

    const response = await fetch(`${process.env.API!}/products?${params}`);
    if (!response.ok) throw new Error("Failed to fetch products");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { products: [], metadata: { currentPage: page, totalPages: 1, limit, totalItems: 0 } };
  }
}

// Top Selling Products
export async function fetchProductStats(pageParam = 1) {
  const response = await fetch(
    `https://flower.elevateegy.com/api/v1/products?sort=-sold&page=${pageParam}&limit=8`,
  );
  const payload: APIResponse<PaginatedResponse<Product[]>> = await response.json();
  if ("error" in payload) throw new Error(payload.error);
  return payload;
}

// Low Stock Products
export async function fetchLowStockProducts(pageParam = 1) {
  const response = await fetch(
    `https://flower.elevateegy.com/api/v1/products?sort=quantity&page=${pageParam}&limit=9`,
  );

  const payload: APIResponse<PaginatedResponse<Product[]>> = await response.json();
  if ("error" in payload) throw new Error(payload.error);
  return payload;
}

export async function fetchPopularProducts(occasionId?: string) {
  const data = await fetchProducts({ sort: "sold", limit: 12, occasion: occasionId });
  return data.products || [];
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
