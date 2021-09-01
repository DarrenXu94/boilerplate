import React from "react";
import Button from "../Button/Button";

export interface PaginationProps {
  pageNumber: number;
  totalPages: number;
  onPreviousClick;
  onNextClick;
}

export default function Pagination({
  pageNumber,
  onNextClick,
  onPreviousClick,
  totalPages,
}: PaginationProps) {
  return (
    <div>
      <p>
        Page {pageNumber} of {totalPages}
      </p>
      <Button disabled={pageNumber <= 1} onClick={onPreviousClick}>
        Previous
      </Button>
      <Button disabled={pageNumber >= totalPages} onClick={onNextClick}>
        Next
      </Button>
    </div>
  );
}
