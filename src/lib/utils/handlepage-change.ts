import { useSearchParams } from "next/navigation";
import { useRouter } from "@/i18n/navigation";
import { use } from "react";

export const handlePageChange = (newPage: number) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(useSearchParams.toString());
  params.set("page", newPage.toString());
  router.push(`?${params.toString()}`);
};
