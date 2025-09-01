"use server";

import { updateCategorySchema } from "@/lib/schema/category.schema";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";

export async function updateCategoryAction(id: string, formData: FormData) {
  try {
    // Extact data from form data
    const name = formData.get("name") as string;
    // validate data
    const valiedationResult = updateCategorySchema.safeParse({ name });

    if (!valiedationResult.success) {
      throw new Error(valiedationResult.error.errors[0].message);
    }

    // create form data
    const apiFormData = new FormData();
    apiFormData.append("name", name);

    const token = await getTokenFromCookies();
    const respone = await fetch(`${process.env.API}/categories/${id}`, {
      method: "PUT",
      body: apiFormData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const payload = await respone.json();
    if ("error" in payload) {
      throw new Error("Error:failed to Update category");
    }

    return payload;
  } catch (error) {
    throw error;
  }
}
