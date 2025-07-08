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
import { cn } from "@/lib/utils/cn";
import { generaToPages } from "@/lib/utils/pagination";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface PaginationComponentProps {
  metaData: MetaData;
}

const testMeta = {
  currentPage: 1,
  totalPages: 5,
  totalItems: 100,
  itemsPerPage: 10,
};

export default function PaginationComponent({ metaData }: PaginationComponentProps) {
  // SearchParams
  const searchParams = useSearchParams();

  //Navigation
  const router = useRouter();

  // Destructure metaData
  const { currentPage, totalPages } = testMeta;

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  // Handle Pagination Logic
  const pagesToRender = generaToPages({ currentPage, totalPages });

  return (
    <div className="py-5">
      <Pagination>
        <PaginationContent>
          {/* first page */}
          <PaginationItem
            onClick={() => handlePageChange(totalPages)}
            className={cn(currentPage === 1 ? "pointer-events-none opacity-50" : "")}
          >
            <PaginationLink href="#" aria-label="Go to first page" size="icon">
              <ChevronFirst className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>

          {/* previous page */}
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

          {/* pages */}
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

          {/* next page */}
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

          {/* last page */}
          <PaginationItem
            onClick={() => handlePageChange(totalPages)}
            className={cn(currentPage === totalPages ? "pointer-events-none opacity-50" : "")}
          >
            <PaginationLink href="#" aria-label="Go to next page" size="icon">
              <ChevronLast className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
