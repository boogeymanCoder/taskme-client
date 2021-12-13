import React, { useEffect, useState } from "react";
import { findScheduleBatch } from "../../api/schedule";
import ScheduleListView from "../../views/Schedule.js/ScheduleListView";

export default function ScheduleList({ from, to }) {
  const [scheduleBatch, setScheduleBatch] = useState(1);
  const [schedules, setSchedules] = useState([]);
  const [enableNext, setEnableNext] = useState(true);
  const [enablePrevious, setEnablePrevious] = useState(true);

  console.log("From:", from);
  console.log("To:", to);
  console.log(isNaN(Date.parse(from)) && isNaN(Date.parse(to)));

  useEffect(() => {
    // if (isNaN(Date.parse(from)) && isNaN(Date.parse(to)))
    //   return console.log("both date was NaN");
    var cancel = false;
    console.log("date not NaN");
    findScheduleBatch(20, scheduleBatch, from, to)
      .then((response) => {
        if (cancel) return;
        if (response.data.length < 1) setEnableNext(false);
        else setEnableNext(true);
        setSchedules(response.data);
      })
      .catch((error) => console.log(error));

    return () => {
      cancel = true;
    };
  }, [from, to, scheduleBatch]);

  useEffect(() => {
    console.log("reset batch");
    setScheduleBatch(1);
  }, [from, to]);

  useEffect(() => {
    if (scheduleBatch <= 1) setEnablePrevious(false);
    else setEnablePrevious(true);
  }, [scheduleBatch]);

  console.log("Schedules:", schedules);

  return (
    <ScheduleListView
      schedules={schedules}
      setScheduleBatch={setScheduleBatch}
      enablePrevious={enablePrevious}
      enableNext={enableNext}
    />
  );
}
