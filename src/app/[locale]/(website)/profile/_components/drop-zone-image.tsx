"use client";
import React, { useRef } from "react";
import { ImageCropper } from "@/components/common/image-cropper";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CloudUpload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { useUploadImageProfile } from "../_hooks/use-profile";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageProfileField, ImageProfileSchema } from "@/lib/schema/profile.schema";

interface DropZoneImageProps {
  photo: string;
}

export type FileWithPreview = FileWithPath & {
  preview: string;
};

const accept = {
  "image/*": [],
};

export default function DropZoneImage({ photo }: DropZoneImageProps) {
  // States
  const [selectedFile, setSelectedFile] = React.useState<FileWithPreview | null>(null);
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const { editImage, isPending } = useUploadImageProfile();

  // Functions
  const onDrop = React.useCallback((acceptedFiles: FileWithPath[]) => {
    const file = acceptedFiles[0];
    if (!file) {
      alert("Selected image is too large!");
      return;
    }

    const fileWithPreview = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    setSelectedFile(fileWithPreview);
    setDialogOpen(true);

    form.setValue("photo", file);
    form.clearErrors("photo");
  }, []);

  // Hooks
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
  });

  const form = useForm<ImageProfileField>({
    resolver: zodResolver(ImageProfileSchema),
  });

  const onSubmit: SubmitHandler<ImageProfileField> = () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("photo", selectedFile);

    editImage(formData);
  };

  return (
    <>
      <div className="relative ">
        {selectedFile ? (
          <ImageCropper
            dialogOpen={isDialogOpen}
            setDialogOpen={setDialogOpen}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        ) : (
          <div className="relative w-fit bg-red-600 rounded-full ">
            <Avatar className="size-[120px] cursor-pointer ring-offset-1 ring-1 ring-zinc-200 ">
              {/* <input {...getInputProps()} /> */}

              <AvatarImage src={photo} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div
              {...getRootProps()}
              className="size-6 ring-offset-1 ring-1 ring-zinc-200 rounded-full text-black bg-zinc-50 absolute bottom-0 end-0 cursor-pointer"
            >
              <Input type="file" {...getInputProps()} />

              <CloudUpload />
            </div>
          </div>
        )}
      </div>

      {/* Hints */}
      {selectedFile ? (
        <>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Avatar + DropZone هنا */}

            {form.formState.errors.photo && (
              <p className="text-red-500 text-sm mt-2">{form.formState.errors.photo.message}</p>
            )}

            <Button type="submit" disabled={isPending} variant={"outline"}>
              Upload Now
            </Button>
          </form>
        </>
      ) : (
        <article>
          {/* Title */}
          <h3 className="text-zinc-800 font-semibold text-xl dark:text-zinc-50">Upload Photo</h3>

          {/* Description */}
          <p className="text-zinc-500 dark:text-zinc-400">
            You can upload a .jpg, .png, or .gif photo with max size of 5MB.
          </p>
        </article>
      )}
    </>
  );
}
