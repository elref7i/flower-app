"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRef } from "react";
import { Label } from "../ui/label";

type FileUploadInputProps = {
  label: string;
  selectedFileName: string;
};
export default function FileUploadInput({ label }: FileUploadInputProps) {
  // Referance
  const fileInputRef = useRef<HTMLInputElement>(null);

  console.log(fileInputRef);
  //Functions
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <Label>{label}</Label>
      <div className="relative w-fit">
        <Input
          ref={fileInputRef}
          className="w-full ps-0 cursor-pointer"
          placeholder=""
          type="file"
        />
        <Button
          onClick={handleButtonClick}
          className="absolute end-1 top-1/2 -translate-y-1/2 text-maroon-500 dark:text-softpink-400"
          size={"sm"}
          variant={"ghost"}
        >
          Upload File
        </Button>
      </div>
    </div>
  );
}
