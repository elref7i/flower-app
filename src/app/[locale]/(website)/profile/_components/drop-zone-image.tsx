"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ImageCropper } from "@/components/common/image-cropper";
import { FileWithPath, useDropzone } from "react-dropzone";
// import SvgText from "@/components/svg-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CloudUpload } from "lucide-react";

export type FileWithPreview = FileWithPath & {
  preview: string;
};

const accept = {
  "image/*": [],
};

export default function DropZoneImage() {
  const [selectedFile, setSelectedFile] = React.useState<FileWithPreview | null>(null);
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const onDrop = React.useCallback(
    (acceptedFiles: FileWithPath[]) => {
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
  });

  return (
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
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div
            {...getRootProps()}
            className="size-6 ring-offset-1 ring-1 ring-zinc-200 rounded-full text-black bg-zinc-50 absolute bottom-0 end-0 cursor-pointer"
          >
            <input {...getInputProps()} />

            <CloudUpload />
          </div>
        </div>
      )}

      {/* <div className=" absolute -bottom-12 left-28 ">
        <SvgText />
      </div> */}
    </div>
  );
}
