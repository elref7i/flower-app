"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { addCategorySchema, type AddCategoryFormData } from "@/lib/schema/category.schema";
import useAddCategory from "../_hooks/useAddCategory";
import { FileUpload } from "@/components/common/file-input";
import { useTranslations } from "next-intl";

export default function EditCategoryForm() {
  // Hooks
  const { addCategory, isPending, error } = useAddCategory();
  const form = useForm<AddCategoryFormData>({
    resolver: zodResolver(addCategorySchema),
    defaultValues: {
      name: "",
    },
  });

  // Submition Function
  const onSubmit = (values: AddCategoryFormData) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("image", values.image);
    addCategory(formData);
  };

  // Translation
  const t = useTranslations();

  return (
    <div className="p-6">
      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                {/* Lable */}
                <FormLabel className="text-sm font-medium text-gray-900 after:content-['*'] after:ml-1 after:text-red-600">
                  {t("name-lable")}
                </FormLabel>

                {/* Input */}
                <Input
                  type="text"
                  placeholder={t("category-inp-palceholder")}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-maroon-500"
                  disabled={isPending}
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Uplaod Image Input */}
          <FormField
            control={form.control}
            name="image"
            render={({ field: { onChange, value, ...field } }) => (
              <FormItem>
                {/* Lable */}
                <FormLabel className="text-sm font-medium text-gray-900 after:content-['*'] after:ml-1 after:text-red-600">
                  {t("cat-img")}
                </FormLabel>
                {/* Custom Input */}
                <FileUpload
                  onChange={onChange}
                  disabled={isPending}
                  accept="image/jpeg,image/png,image/webp"
                  placeholder="Upload file"
                  className="mt-1"
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Add Category Button */}
          <Button
            type="submit"
            className="w-full bg-maroon-600 hover:bg-maroon-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
            disabled={isPending}
          >
            {isPending ? t("waiting-add-category") : t("add-category")}
          </Button>
        </form>
      </Form>
    </div>
  );
}
