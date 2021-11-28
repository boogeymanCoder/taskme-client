import React, { useState } from "react";
import NewSchedule from "../Components/NewSchedule";
import ScheduleList from "../Components/ScheduleList";

export default function Appointment() {
  const [date, setDate] = useState("");

  return (
    <div>
      <h1>Appointment</h1>
      <NewSchedule />
      <br />
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <ScheduleList date={date} />
    </div>
  );
}
