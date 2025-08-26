// import { PaginatedResponse, Product } from "./../types/api.d";
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

export async function fetchBestSellers() {
  try {
    const response = await fetch(`${process.env.API!}/products?sort=sold`);
    if (!response.ok) throw new Error("Failed to fetch best-seller products");
    const data = await response.json();
    return data.products;
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
  const payload: APIResponse<PaginatedResponse<Product[]>> = await response.json();
  if ("error" in payload) throw new Error(payload.error);
  return payload;
}

// Low Stock Products
export async function fetchLowStockProducts(
  pageParam = 1,
): Promise<PaginatedResponse<{ products: Product[] }>> {
  try {
    const response = await fetch(
      `https://flower.elevateegy.com/api/v1/products?sort=quantity&page=${pageParam}&limit=9`,
    );
    if (!response.ok) throw new Error("Failed to Fetch Products");

    const data = await response.json();

    return {
      products: data.products || [],
      metadata: data.metadata || {
        currentPage: pageParam,
        totalPages: 3,
        limit: 9,
        totalItems: 0,
      },
    };
  } catch (error) {
    return {
      products: [],
      metadata: { currentPage: pageParam, totalPages: 1, limit: 9, totalItems: 0 },
    };
  }
}

export async function fetchPopularProducts(occasionId?: string) {
  const baseUrl = `${process.env.API!}/products?limit=12&sort=sold`;
  const url = occasionId ? `${baseUrl}&occasion=${occasionId}` : baseUrl;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch products");
  const data = await response.json();
  return data.products;
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
