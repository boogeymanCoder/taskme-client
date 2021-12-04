import React, { useState } from "react";

export default function Pagination({
  setPageBatch,
  setPage,
  enablePrevious,
  setEnablePrevious,
  enableNext,
  setEnableNext,
}) {
  return (
    <span>
      <input
        type="button"
        value="Previous"
        onClick={(e) => {
          setPageBatch((lastState) =>
            lastState > 1 ? lastState - 1 : lastState
          );
          setPage();
          setEnableNext(false);
          setEnablePrevious(false);
        }}
        disabled={!enablePrevious}
      />
      <input
        type="button"
        value="Next"
        onClick={(e) => {
          setPageBatch((lastState) => lastState + 1);
          setPage();
          setEnableNext(false);
          setEnablePrevious(false);
        }}
        disabled={!enableNext}
      />
    </span>
  );
}
