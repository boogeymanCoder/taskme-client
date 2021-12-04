import React, { useState } from "react";
import NewSchedule from "../Components/NewSchedule";
import ScheduleList from "../Components/ScheduleList";
import { useAuthCheck } from "../hooks/auth";

export default function Appointment() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useAuthCheck("/login");

  return (
    <div>
      <h1>Appointment</h1>
      <NewSchedule />
      <br />
      <span>From:</span> <br />
      <input type="date" onChange={(e) => setFrom(e.target.value)} />
      <br />
      <span>to:</span> <br />
      <input type="date" onChange={(e) => setTo(e.target.value)} /> <br />
      <br />
      <ScheduleList from={from} to={to} />
    </div>
  );
}
