"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { StarRatingDyanmic } from "@/components/common/rating";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProductReviewFields, ProductReviewSchema } from "@/lib/schema/review.schema";
import { use, useState } from "react";
import { useCreateProductReview } from "../_hooks/use-add-review";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { Link } from "@/i18n/navigation";

export default function ProductReviewForm({ productId }: { productId: string }) {
  // Translations
  const t = useTranslations();

  // State
  const [rating, setRating] = useState(0);

  // Variables
  const { data: session } = useSession();
  const isLoggedIn = !!session?.user;

  // Mutations
  const { addReview, error, isPending } = useCreateProductReview();

  // Form
  const form = useForm<ProductReviewFields>({
    defaultValues: {
      rating: 0,
      title: "",
      comment: "",
    },
    resolver: zodResolver(ProductReviewSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<ProductReviewFields> = async (values) => {
    await addReview(values);
  };

  return (
    <div className="relative col-span-5 pe-5">
      {!isLoggedIn && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-base font-semibold text-zinc-800 dark:text-softpink-200">
            <Link href={`/login?callbackUrl=/products/${productId}`} className="underline">
              {t("login-to-add-review")}
            </Link>
          </div>
        </div>
      )}
      <div className={isLoggedIn ? "" : "blur-sm pointer-events-none select-none"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[10px]">
            {/* Rating */}
            <div className="flex items-center  gap-2">
              <span className="font-medium">{t("your-rating")}</span>
              <StarRatingDyanmic
                rating={rating}
                setRating={(value) => {
                  form.setValue("rating", value);
                  setRating(value);
                }}
              />
            </div>
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("title")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder={`${t("enter-the-title")}`}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Review */}
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("review")}</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder={`${t("what-do-you-think-of-this-product")}`}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Error Message */}
            {error && <p className="text-red-500">{error.message}</p>}
            {/* Submit */}
            <Button disabled={isPending} className="w-full" variant={"default"} type="submit">
              {t("add-review")}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
