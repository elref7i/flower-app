"use client";

import type React from "react";
import { forwardRef, useRef, useState } from "react";
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface FileUploadProps {
  onChange?: (file: File | null) => void;
  accept?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      onChange,
      accept = "image/*",
      disabled = false,
      className,
      placeholder = "Upload file",
      ...props
    },
    ref,
  ) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (file: File | null) => {
      setSelectedFile(file);
      onChange?.(file);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      handleFileChange(file);
    };

    const handleDrag = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (disabled) return;

      const files = e.dataTransfer.files;
      if (files && files[0]) {
        handleFileChange(files[0]);
      }
    };

    const handleClick = () => {
      if (!disabled) {
        inputRef.current?.click();
      }
    };

    const formatFileSize = (bytes: number) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    return (
      <div
        className={cn(
          "relative w-full h-12 border  border-gray-300 rounded-lg transition-colors cursor-pointer",
          "hover:border-gray-400 focus-within:border-maroon-500 focus-within:ring-2 focus-within:ring-maroon-500/20",
          dragActive && "border-maroon-500 bg-maroon-50",
          selectedFile && "border-green-500 bg-green-50",
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleInputChange}
          disabled={disabled}
          className="sr-only"
          {...props}
        />

        <div className="flex items-center justify-between p-4 h-full">
          <div className="flex-1">
            {selectedFile ? (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                  <Upload className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-900 truncate">{selectedFile.name}</span>
                  <span className="text-xs text-gray-500">{formatFileSize(selectedFile.size)}</span>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-500">{dragActive ? "Drop file here..." : ""}</div>
            )}
          </div>

          <button
            type="button"
            className={cn(
              "flex items-center space-x-2 px-4 py-2 text-sm font-medium text-maroon-600 hover:text-maroon-700 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:ring-offset-2 rounded-md",
              disabled && "cursor-not-allowed opacity-50",
            )}
            disabled={disabled}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            <Upload className="w-4 h-4" />
            <span>{placeholder}</span>
          </button>
        </div>
      </div>
    );
  },
);

FileUpload.displayName = "FileUpload";

export { FileUpload };
