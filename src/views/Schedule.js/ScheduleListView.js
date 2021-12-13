import React from "react";
import Schedule from "../../Components/Schedule/Schedule";

export default function ScheduleListView({
  schedules,
  setScheduleBatch,
  enablePrevious,
  enableNext,
}) {
  return (
    <div>
      {schedules.length < 1 && <h2>No Schedule Found</h2>}
      {schedules.map((schedule, index) => {
        return (
          <span key={schedule._id}>
            <Schedule schedule={schedule} />
            <br />
          </span>
        );
      })}

      <input
        type="button"
        value="<Previous"
        onClick={(e) =>
          setScheduleBatch((lastBatch) =>
            lastBatch > 1 ? lastBatch - 1 : lastBatch
          )
        }
        disabled={!enablePrevious}
      />

      <input
        type="button"
        value="Next>"
        onClick={(e) => setScheduleBatch((lastBatch) => lastBatch + 1)}
        disabled={!enableNext}
      />
    </div>
  );
}
