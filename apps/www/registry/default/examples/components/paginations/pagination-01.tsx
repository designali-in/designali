// Dependencies: pnpm install lucide-react

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function PaginationDemo({
  currentPage,
  totalPages,
}: PaginationProps) {
  return (
    <Pagination>
      <PaginationContent className="w-full justify-between gap-3">
        <PaginationItem>
          <Button
            variant="outline"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            aria-disabled={currentPage === 1 ? true : undefined}
            role={currentPage === 1 ? "link" : undefined}
          >
            <a
              className="flex items-center"
              href={currentPage === 1 ? undefined : `/page/${currentPage - 1}`}
            >
              <ChevronLeft
                className="-ms-1 me-2 opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              <p>Previous</p>
            </a>
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            variant="outline"
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            aria-disabled={currentPage === totalPages ? true : undefined}
            role={currentPage === totalPages ? "link" : undefined}
          >
            <a
              className="flex items-center"
              href={
                currentPage === totalPages
                  ? undefined
                  : `/page/${currentPage + 1}`
              }
            >
              <p>Next</p>
              <ChevronRight
                className="-me-1 ms-2 opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
