import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useRatingFilter() {
  // State
  const [rate, setRate] = useState<number | null>(null);

  // Navigation
  const searchParams = useSearchParams();
  const router = useRouter();

  // Function to add selected rate to search params
  function handleRate(i: number) {
    const createSearchParams = new URLSearchParams(searchParams.toString());
    createSearchParams.set("rateAvg[gte]", `${i + 1}`);

    // Navigate to new search params
    router.push(`?${createSearchParams}`, { scroll: false });
  }

  // Effects
  useEffect(() => {
    const rating = searchParams.get("rateAvg[gte]");
    rating ? setRate(+rating - 1) : setRate(null);
  }, [searchParams]);

  return { rate, handleRate };
}
