import React from "react";
import PaginationView from "../views/PaginationView";

export default function Pagination({
  setPageBatch,
  setPage,
  enablePrevious,
  setEnablePrevious,
  enableNext,
  setEnableNext,
  reverse,
}) {
  return (
    <PaginationView
      setPageBatch={setPageBatch}
      reverse={reverse}
      setPage={setPage}
      setEnableNext={setEnableNext}
      setEnablePrevious={setEnablePrevious}
      enablePrevious={enablePrevious}
      enableNext={enableNext}
    />
  );
}
