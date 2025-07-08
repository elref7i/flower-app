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
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface PaginationComponentProps {
  metaData: MetaData;
}

const testMeta = {
  currentPage: 1,
  totalPages: 10,
  totalItems: 100,
  itemsPerPage: 10,
  
}

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
      <PaginationItem>
          <ChevronsLeft /> 
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
        <PaginationItem>
          <ChevronsRight />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
    
 </div>
  );
}
