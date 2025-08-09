"use client";

import { ChevronFirst, ChevronLast } from "lucide-react";
import { useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils/cn";

interface PaginationComponentProps {
  metaData: MetaData;
}

function getVisiblePages(currentPage: number, totalPages: number): (number | string)[] {
  const pages: (number | string)[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    const rangeStart = Math.max(2, currentPage - 2);
    const rangeEnd = Math.min(totalPages - 1, currentPage + 2);

    if (rangeStart > 2) pages.push("...");
    for (let i = rangeStart; i <= rangeEnd; i++) pages.push(i);
    if (rangeEnd < totalPages - 1) pages.push("...");
    pages.push(totalPages);
  }

  return pages;
}

export default function PaginationComponent({ metaData }: PaginationComponentProps) {
  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Variables
  const currentPage = Number(searchParams.get("page") || 1);
  const totalPages = metaData.totalPages;

  // Functions
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const pagesToRender = getVisiblePages(currentPage, totalPages);

  return (
    <div className="py-5">
      <Pagination>
        <PaginationContent>
          {/* First Page */}
          <PaginationItem>
            <PaginationLink
              aria-label="First page"
              size="icon"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage !== 1) handlePageChange(1);
              }}
              className={cn(currentPage === 1 && "pointer-events-none opacity-50")}
            >
              <ChevronFirst className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>

          {/* Previous Page */}
          <PaginationItem>
            <PaginationPrevious
              size="sm"
              aria-label="Previous page"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) handlePageChange(currentPage - 1);
              }}
              className={cn(currentPage === 1 && "pointer-events-none opacity-50")}
            />
          </PaginationItem>

          {/* Page Numbers */}
          {pagesToRender.map((page, index) => {
            if (page === "...") {
              return (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }

            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={page === currentPage}
                  onClick={(e) => {
                    e.preventDefault();
                    if (page !== currentPage) handlePageChange(Number(page));
                  }}
                  className={cn(
                    page === currentPage &&
                      "bg-primary text-white hover:bg-primary/90 hover:text-white",
                    "transition-colors",
                  )}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* Next Page */}
          <PaginationItem>
            <PaginationNext
              size="sm"
              aria-label="Next page"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) handlePageChange(currentPage + 1);
              }}
              className={cn(currentPage === totalPages && "pointer-events-none opacity-50")}
            />
          </PaginationItem>

          {/* Last Page */}
          <PaginationItem>
            <PaginationLink
              aria-label="Last page"
              size="icon"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage !== totalPages) handlePageChange(totalPages);
              }}
              className={cn(currentPage === totalPages && "pointer-events-none opacity-50")}
            >
              <ChevronLast className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
