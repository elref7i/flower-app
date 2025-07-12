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
import { useCreateProductReview } from "../_hooks/use-products";

export default function ProductReviewForm() {
  // States
  const [rating, setRating] = useState(0);

  // Mutations
  const { addReview, data, error, isPending } = useCreateProductReview();

  // Form
  const form = useForm<ProductReviewFields>({
    defaultValues: {
      rating: 0,
      title: "",
      comment: "",
    },
    resolver: zodResolver(ProductReviewSchema),
  });

  const onSubmit: SubmitHandler<ProductReviewFields> = async (values) => {
    await addReview(values);
    console.log(values);
  };

  console.log("rating", rating);
  console.log("formRating", form.getValues("rating"));

  return (
    <div className="col-span-5  pe-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[10px]">
          {/* star */}
          <div className="flex items-center  gap-2">
            <span className="font-medium">Your Rating :</span>
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
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} type="text" placeholder="Enter The Title" className="w-full" />
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
                <FormLabel>Review</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="What do you think of this product?"
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isPending} className="w-full" variant={"default"} type="submit">
            Add review
          </Button>
        </form>
      </Form>
    </div>
  );
}
