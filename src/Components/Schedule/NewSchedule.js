import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createSchedule } from "../../api/schedule";
import NewScheduleView from "../../views/Schedule.js/NewScheduleView";

export default function NewSchedule() {
  const account = useSelector((state) => state.accountLog.account);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [label, setLabel] = useState("");

  function addHandler(e) {
    e.preventDefault();

    createSchedule({ owner: account._id, start: start, end: end, label: label })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  return (
    <NewScheduleView
      addHandler={addHandler}
      start={start}
      setStart={setStart}
      end={end}
      setEnd={setEnd}
      label={label}
      setLabel={setLabel}
    />
  );
}
