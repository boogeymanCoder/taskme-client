import React from "react";
import NewSchedule from "../../Components/Schedule/NewSchedule";
import ScheduleList from "../../Components/Schedule/ScheduleList";

export default function AppointmentView({ setFrom, setTo, from, to }) {
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
