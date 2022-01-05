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
    <div className="row justify-content-center pb-1">
      <div className="col-auto">
        <input
          className="btn btn-dark me-1"
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
          className="btn btn-dark"
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
    </div>
  );
}
