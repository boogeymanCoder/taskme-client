import React from "react";
import { deleteSchedule } from "../api/schedule";
import { devLog } from "../dev/log";

export default function Schedule({ schedule }) {
  function deleteHandler(e) {
    if (
      window.confirm(
        "This action cannot be undone, are you sure you want to delete schedule?"
      )
    )
      deleteSchedule(schedule._id)
        .then((response) => devLog("Schedule Deleted"))
        .catch((error) => devLog(error));
  }

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
