import React, { useEffect, useState } from "react";
import { findScheduleBatch } from "../api/schedule";
import Schedule from "./Schedule";

export default function ScheduleList({ date }) {
  const [scheduleBatch, setScheduleBatch] = useState(1);
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    if (isNaN(Date.parse(date))) return;
    findScheduleBatch(20, scheduleBatch, date).then((response) => {
      setSchedules(response.data);
    });
  }, [date, scheduleBatch]);

  return (
    <div>
      {schedules.map((schedule, index) => {
        return (
          <div key={schedule._id}>
            <Schedule schedule={schedule} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
