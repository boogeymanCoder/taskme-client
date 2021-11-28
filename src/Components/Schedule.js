import React from "react";

export default function Schedule({ schedule }) {
  return (
    <div>
      <span>{`label: ${schedule.label}`}</span>
      <br />
      <span>{`start: ${new Date(schedule.start).toUTCString()}`}</span>
      <br />
      <span>{`end: ${new Date(schedule.end).toUTCString()}`}</span>
      <br />
    </div>
  );
}
