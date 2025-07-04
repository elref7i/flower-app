import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { generaToPages } from "@/lib/utils/pagination";

interface PaginationComponentProps {
  metaData: MetaData;
  handlePageChange: (newPage: number) => void;
}

export default function PaginationComponent({
  metaData,
  handlePageChange,
}: PaginationComponentProps) {
  console.log(metaData);

  const testMeta = {
    currentPage: 5,
    totalPages: 10,
    limit: 40,
    // totalItems: 16,
  };

  const { currentPage, totalPages } = testMeta;

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
