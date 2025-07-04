"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "@/i18n/navigation";
import { generaToPages } from "@/lib/utils/pagination";
import { useSearchParams } from "next/navigation";

interface PaginationComponentProps {
  metaData: MetaData;
}

export default function PaginationComponent({ metaData }: PaginationComponentProps) {
  // SearchParams
  const searchParams = useSearchParams();

  //Navigation
  const router = useRouter();

  // Destructure metaData
  const { currentPage, totalPages } = metaData;

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  // Handle Pagination Logic
  const pagesToRender = generaToPages({ currentPage, totalPages });

  return (
    <Pagination>
      <PaginationContent>
        {/* السابق */}
        <PaginationItem>
          <PaginationPrevious
            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            size={"sm"}
            aria-disabled={currentPage === 1}
            href="#"
            onClick={() => {
              if (currentPage > 1) handlePageChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        {/* الصفحات */}
        {pagesToRender.map((page, index) =>
          page === -1 ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        {/* التالي */}
        <PaginationItem>
          <PaginationNext
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            size={"sm"}
            href="#"
            onClick={() => {
              if (currentPage < totalPages) handlePageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
