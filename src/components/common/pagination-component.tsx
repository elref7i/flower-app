import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
    currentPage: 1,
    totalPages: 3,
    limit: 40,
    totalItems: 16,
  };
  const test = Array.from({ length: 5 }, (v, i) => i);
  console.log(test);

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          {Array.from({ length: testMeta.totalPages + 1 }, (v, i) => {
            return (
              <PaginationItem key={i + 1}>
                <PaginationLink href="#" isActive>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
