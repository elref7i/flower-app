"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { addProductSchema, TAddProductForm } from "@/lib/schema/products-cu.schema";
import { useMutation } from "@tanstack/react-query";

import { toast } from "sonner";
import { addProductAction } from "../_action/add-product.action";

export default function useAddProduct() {
  const schema = addProductSchema();

  // form mutation
  const { error, mutate, isPending } = useMutation({
    mutationKey: ["addProduct"],
    mutationFn: async (form: FormData) => {
      const response = await addProductAction(form);
      if ("error" in response) throw new Error(response.error || "Can't add product");

      if (response.message !== "success") throw new Error(response.message || "can't add m");
      return response;
    },
    onSuccess: (data) => {
      toast.success("Product Add successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // form hook
  const form = useForm<TAddProductForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      price: "",
      discount: "",
      quantity: "",
      title: "",
      description: "",
      category: "",
      occasion: "",
      imgCover: [],
      images: [],
    },
  });

  // submit function
  const onSubmit: SubmitHandler<TAddProductForm> = (values) => {
    const formData = new FormData();

    // transform object values to form data
    (Object.keys(values) as (keyof TAddProductForm)[]).forEach((key) => {
      const value = values[key];
      // Skip images and imgCover here, handle them separately
      if (key === "images" || key === "imgCover") return;
      formData.append(key, value as string);
    });

    // add final price to object
    formData.append("priceAfterDiscount", String(+values.price - +values.discount));

    // add images
    if (Array.isArray(values.images)) {
      values.images.forEach((file) => {
        formData.append("images", file);
      });
    }

    // add cover image
    if (Array.isArray(values.imgCover)) {
      formData.append("imgCover", values.imgCover[0]);
    }

    // mutate
    mutate(formData);
  };

  return { form, onSubmit, isPending, error };
}
