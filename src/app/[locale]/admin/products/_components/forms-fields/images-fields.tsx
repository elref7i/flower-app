import React, { useRef } from "react";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LabelWithAsterisk from "../label-with-asterisk";
import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils/cn";
import { Button, buttonVariants } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

export default function ImagesFields() {
  // hooks
  const { control, setValue } = useFormContext();
  const coverImage = useRef<HTMLInputElement | null>(null);
  const gallery = useRef<HTMLInputElement | null>(null);
  const t = useTranslations("products-cu");
  return (
    <div className="grid grid-cols-2 gap-3 justify-center items-center">
      {/* Cover Image field */}
      <FormField
        control={control}
        name="imgCover"
        render={({ field }) => (
          <FormItem>
            <LabelWithAsterisk title="cover-image" />
            <div className="relative">
              {/* input to display value */}
              <Input readOnly className="w-full" defaultValue={coverImage.current?.value || ""} />

              {/* upload photo button */}
              <Button
                variant={"ghost"}
                type="button"
                onClick={() => {
                  coverImage.current?.click();
                }}
                className={cn(
                  "w-fit px-2 text-maroon-500 hover:text-maroon-500 absolute ltr:right-1 rtl:left-1 top-1/2 -translate-y-1/2 ",
                  coverImage.current && "bg-white",
                )}
              >
                <Upload width={17} height={17} /> {t("upload-photo")}
              </Button>

              {/* image input */}
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  // @ts-expect-error
                  field.onChange(Array.from(e.target.files));
                }}
                className="w-full hidden"
                ref={coverImage}
              />

              {/* clear input value */}
              <X
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "rounded-full size-6 cursor-pointer p-1 absolute -top-6 rtl:left-0 ltr:right-0 hidden bg-white",
                  coverImage.current?.value && "block",
                )}
                onClick={() => {
                  if (coverImage.current) {
                    coverImage.current.value = "";
                  }
                  setValue("imgCover", []);
                }}
              />
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Gallery Field */}
      <FormField
        control={control}
        name="images"
        render={({ field }) => (
          <FormItem>
            <Label className="text-sm font-medium">{t("gallery")}</Label>
            <div className="relative">
              {/* input to display value */}
              <Input readOnly className="w-full" defaultValue={gallery.current?.value || ""} />

              {/* gallery input */}
              <Input
                type="file"
                accept="image/*"
                multiple
                ref={gallery}
                onChange={(e) => {
                  // @ts-expect-error
                  field.onChange(Array.from(e.target.files));
                }}
                className="w-full hidden"
              />

              {/* upload button */}
              <Button
                variant={"ghost"}
                type="button"
                onClick={() => {
                  gallery.current?.click();
                }}
                className={cn(
                  "w-fit px-2 text-maroon-500 hover:text-maroon-500 absolute ltr:right-1 rtl:left-1 top-1/2 -translate-y-1/2 ",
                  gallery.current && "bg-white",
                )}
              >
                <Upload width={17} height={17} /> {t("upload-photo")}
              </Button>

              {/* clear input value */}
              <X
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "rounded-full size-6 cursor-pointer p-1 absolute -top-6 rtl:left-0 ltr:right-0 hidden bg-white",
                  gallery.current?.value && "block",
                )}
                onClick={() => {
                  if (gallery.current) {
                    gallery.current.value = "";
                  }
                  setValue("images", []);
                }}
              />
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
