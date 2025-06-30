export async function getAllProducts(){
    const response = await fetch(`${process.env.BASE_API}/products`);
    const products = await response.json();
    if (!response.ok) throw new Error("Error:failed to get products");
    return products.products;
}