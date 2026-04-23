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

// Get All Products By All Filters
export async function getAllProductsByFilters({
  pageParam = 1,
  category,
  occasion,
  rateAvg,
  priceGte,
  priceLte,
  limit = 20,
}: {
  pageParam?: number,
  category?: string
  occasion?: string
  rateAvg?: number
  priceGte?: number
  priceLte?: number
  limit?: number
}) {
  try {
    const params = new URLSearchParams()

    params.append("page", pageParam.toString())
    params.append("limit", limit.toString())

    if (category) params.append("category", category)
    if (occasion) params.append("occasion", occasion)
    if (rateAvg) params.append("rateAvg", rateAvg.toString())
    if (priceGte) params.append("price[gte]", priceGte.toString())
    if (priceLte) params.append("price[lte]", priceLte.toString())

    const url = `https://flower.elevateegy.com/api/v1/products?${params.toString()}`

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }

    const payload = await response.json()

    if ("error" in payload) throw new Error(payload.error)

    return payload
  } catch (error) {
    console.error("Failed to fetch products:", error)
    throw error
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
  const payload: APIResponse<PaginatedResponse<Product>> = await response.json();
  if ("error" in payload) throw new Error(payload.error);
  return payload;
}

// Low Stock Products
export async function fetchLowStockProducts(pageParam = 1) {
  const response = await fetch(
    `https://flower.elevateegy.com/api/v1/products?page=${pageParam}&limit=9`,
  );

  const payload: APIResponse<PaginatedResponse<{products: Product[]}>> = await response.json();
  if ("error" in payload) throw new Error(payload.error);

  // console.log(payload);

  return payload;
}

// Popular Products
export async function fetchPopularProducts(occasionId?: string) {
  try {
    const params = new URLSearchParams({
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
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/products/${id}`);
  const payload: APIResponse<{ product: Product }> = await response.json();
  if ("error" in payload) throw new Error(payload.error || "Can't get product");
  return payload.product;
}
