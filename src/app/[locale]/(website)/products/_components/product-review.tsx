"use client";
import {  StarRatingDyanmic, StarRatingStatic } from "@/components/common/rating";
import CommentComponent from "./comment-component";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProductReviewFields, ProductReviewSchema } from "@/lib/schema/review.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { set } from "zod";

export default function ProductReview() {
  // States
  const [rating, setRating] = useState(0);

  const form = useForm<ProductReviewFields>({
    defaultValues: {
      rating: 0,
      title: "",
      comment: "",
    },
    resolver: zodResolver(ProductReviewSchema),
  });

  const onSubmit: SubmitHandler<ProductReviewFields> = (values) => {
    console.log(values);
  };

  return (
    <div className="space-y-8">
      {/* product Review */}
      <div>
        {/* Title */}
        <h1 className="font-bold text-4xl  text-maroon-700 dark:text-softpink-200">
          Product Reviews
        </h1>

        {/* General */}
        <h2 className="font-semibold text-xl">General rating:</h2>

        {/* Result Ratin */}
        <p className="font-bold text-2xl">
          4.5 <span className="font-medium text-sm text-zinc-500">(8 ratings)</span>
        </p>

        {/* Rating Review  */}
        <StarRatingStatic />
      </div>

      {/* Form & Comments */}
      <div className="grid grid-cols-12 gap-10 ">
        {/* Form */}

        <div className="col-span-5  pe-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[10px]">
              {/* star */}
              <div className="flex items-center  gap-2">
                <span className="font-medium">Your Rating :</span>
                <StarRatingDyanmic rating={rating} setRating={setRating}/>
              </div>

              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Enter The Title"
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
                name="title"
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

              <Button className="w-full" variant={"default"} type="submit">
                Add review
              </Button>
            </form>
          </Form>
        </div>
        {/* Comments */}
        <div className="space-y-[10px] col-span-6 relative before:absolute before:border-l-2 before:h-full before:border-zinc-200 before:-left-5 max-h-[300px] overflow-auto">
          {/* comment */}
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
        </div>
      </div>
    </div>
  );
}
