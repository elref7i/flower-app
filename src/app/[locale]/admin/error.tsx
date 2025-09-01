"use client"; // Error components must be Client Components

import OopsWrong from "@/components/commerce-ui/oops";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <OopsWrong />;
}
