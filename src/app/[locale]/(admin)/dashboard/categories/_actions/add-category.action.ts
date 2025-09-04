"use server";

import { addCategorySchema } from "@/lib/schema/category.schema";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";

export async function addCategory(formData: FormData) {
  try {
    // Extract data from FormData
    const name = formData.get("name") as string;
    const image = formData.get("image") as File;

    // Validate the data
    const validationResult = addCategorySchema.safeParse({ name, image });

    if (!validationResult.success) {
      throw new Error(validationResult.error.errors[0].message);
    }

    // Create FormData for the API request
    const apiFormData = new FormData();
    apiFormData.append("name", name);
    apiFormData.append("image", image);

    // Token
    const token = await getTokenFromCookies();

    const response = await fetch(`${process.env.API}/categories`, {
      method: "POST",
      body: apiFormData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("API Error:", errorData);
      throw new Error(`Failed to create category: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Server action error:", error);
    throw error;
  }
}
