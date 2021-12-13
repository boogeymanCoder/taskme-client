import React from "react";

export default function PaginationView({
  setPageBatch,
  reverse,
  setPage,
  setEnableNext,
  setEnablePrevious,
  enablePrevious,
  enableNext,
}) {
  return (
    <div>
      <input
        type="button"
        value="Previous"
        onClick={(e) => {
          setPageBatch((lastState) => {
            if (!reverse) return lastState > 1 ? lastState - 1 : lastState;
            else return lastState + 1;
          });
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
          setPageBatch((lastState) => {
            if (!reverse) return lastState + 1;
            else return lastState > 1 ? lastState - 1 : lastState;
          });
          setPage();
          setEnableNext(false);
          setEnablePrevious(false);
        }}
        disabled={!enableNext}
      />
    </div>
  );
}
