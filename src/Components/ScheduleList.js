import React, { useEffect, useState } from "react";
import { findScheduleBatch } from "../api/schedule";
import { devLog } from "../dev/log";
import Schedule from "./Schedule";

export default function ScheduleList({ from, to }) {
  const [scheduleBatch, setScheduleBatch] = useState(1);
  const [schedules, setSchedules] = useState([]);
  const [enableNext, setEnableNext] = useState(true);
  const [enablePrevious, setEnablePrevious] = useState(true);

  devLog("From:", from);
  devLog("To:", to);
  devLog(isNaN(Date.parse(from)) && isNaN(Date.parse(to)));

  useEffect(() => {
    // if (isNaN(Date.parse(from)) && isNaN(Date.parse(to)))
    //   return devLog("both date was NaN");
    devLog("date not NaN");
    findScheduleBatch(20, scheduleBatch, from, to)
      .then((response) => {
        if (response.data.length < 1) setEnableNext(false);
        else setEnableNext(true);
        setSchedules(response.data);
      })
      .catch((error) => devLog(error));
  }, [from, to, scheduleBatch]);

  useEffect(() => {
    devLog("reset batch");
    setScheduleBatch(1);
  }, [from, to]);

  useEffect(() => {
    if (scheduleBatch <= 1) setEnablePrevious(false);
    else setEnablePrevious(true);
  }, [scheduleBatch]);

  devLog("Schedules:", schedules);

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
