export async function getAllProducts(){
    const response = await fetch(`${process.env.BASE_API}/products`);
    const products = await response.json();
    if (!response.ok) throw new Error("Error:failed to get products");
    return products.products;
}
export async function fetchBestSellers() {
  try {
    const response = await fetch(`${process.env.API}/products?sort=sold`);
    if (!response.ok) throw new Error("Failed to fetch best-seller products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchPopularProducts(occasionId?: string) {
  const baseUrl = `${process.env.API}/products?limit=12&sort=sold`;
  const url = occasionId ? `${baseUrl}&occasion=${occasionId}` : baseUrl;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch products");
  const data = await response.json();
  return data.products;
}
