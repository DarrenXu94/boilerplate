import React from "react";

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
      <button disabled={pageNumber <= 1} onClick={onPreviousClick}>
        Previous
      </button>
      <button disabled={pageNumber >= totalPages} onClick={onNextClick}>
        Next
      </button>
    </div>
  );
}
