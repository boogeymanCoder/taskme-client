import React from "react";

export default function ScheduleView({ schedule, deleteHandler }) {
  return (
    <div>
      <span>{`label: ${schedule.label}`}</span>
      <br />
      <span>{`start: ${new Date(schedule.start).toUTCString()}`}</span>
      <br />
      <span>{`end: ${new Date(schedule.end).toUTCString()}`}</span>
      <br />
      <input type="button" value="Delete" onClick={deleteHandler} />
    </div>
  );
}
