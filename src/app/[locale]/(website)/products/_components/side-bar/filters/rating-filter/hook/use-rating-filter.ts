import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useRatingFilter() {
  // hooks
  const searchParams = useSearchParams();
  const [rate, setRate] = useState<number | null>(null);
  const router = useRouter();

  // Function to add selected rate to search params
  function handleRate(i: number) {
    const createSearchParams = new URLSearchParams(searchParams.toString());
    createSearchParams.set("rating", `${i + 1}`);

    // Navigate to new search params
    router.push(`?${createSearchParams}`, { scroll: false });
  }

  // Listen on search params if have a rate to render filled stars
  useEffect(() => {
    const rating = searchParams.get("rating");
    rating ? setRate(+rating - 1) : setRate(null);
  }, [searchParams]);

  return { rate, handleRate };
}
