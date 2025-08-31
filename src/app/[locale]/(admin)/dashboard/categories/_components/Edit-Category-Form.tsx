"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ImageIcon } from "lucide-react";
import useUpdateCategory from "../_hooks/useUpadateCategory";
import { updateCategorySchema, UpadateCategoryFromData } from "@/lib/schema/category.schema";
import { useTranslations } from "next-intl";

export default function EditCategoryForm({ id, initialName }: { id: string; initialName: string }) {
  // Hooks
  const { updateCategory, isPending } = useUpdateCategory();
  const form = useForm<UpadateCategoryFromData>({
    resolver: zodResolver(updateCategorySchema),
    defaultValues: {
      name: initialName,
    },
  });

  //   Submition Function
  const onSubmit = (values: UpadateCategoryFromData) => {
    const formData = new FormData();
    formData.append("name", values.name);
    updateCategory({ id, formData });
  };

  const t = useTranslations();

  return (
    <>
      {/* Title */}
      <h1 className="ms-7 mt-7 mb-6 font-semibold text-2xl">
        {t("update-category")} {initialName}
      </h1>

      <Card className="mx-6 border-none ">
        <CardContent className="max-w-3xl">
          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    {/* Labele */}
                    <FormLabel className="after:content-['*'] after:ms-1 after:text-red-600 font-medium">
                      {t("name-lable")}
                    </FormLabel>
                    {/* Input Name */}
                    <Input
                      type="text"
                      placeholder="Enter category name"
                      className="w-full"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* View Category Image Button*/}
              <div className="flex justify-end items-center gap-2 text-sm text-blue-600">
                <Button
                  type="button"
                  variant="outline"
                  className="bg-transparent text-blue-600 text-sm border border-gray-300 mb-32"
                >
                  <ImageIcon className="w-4 h-4 mr-2" />
                  {t("view-cat-imgs")}
                </Button>
              </div>

              {/* Upadate Category Button */}
              <Button
                type="submit"
                className="w-full bg-maroon-600 hover:bg-maroon-700 text-white "
                disabled={isPending}
              >
                {isPending ? "Updating..." : "Update Category"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
