import React from "react";
import NewSchedule from "../../Components/Schedule/NewSchedule";
import ScheduleList from "../../Components/Schedule/ScheduleList";

export default function AppointmentView({ setFrom, setTo, from, to }) {
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-md-8">
        <h1>Appointment</h1>
        <NewSchedule />
        <br />
        <span>From:</span> <br />
        <input
          className="form-control mb-1"
          type="date"
          onChange={(e) => setFrom(e.target.value)}
        />
        <span>to:</span> <br />
        <input
          className="form-control mb-1"
          type="date"
          onChange={(e) => setTo(e.target.value)}
        />{" "}
        <br />
        <ScheduleList from={from} to={to} />
      </div>
    </div>
  );
}
