import React from "react";
import { deleteSchedule } from "../../api/schedule";
import ScheduleView from "../../views/Schedule.js/ScheduleView";

export default function Schedule({ schedule }) {
  function deleteHandler(e) {
    if (
      window.confirm(
        "This action cannot be undone, are you sure you want to delete schedule?"
      )
    )
      deleteSchedule(schedule._id)
        .then((response) => console.log("Schedule Deleted"))
        .catch((error) => console.log(error));
  }

  return <ScheduleView schedule={schedule} deleteHandler={deleteHandler} />;
}
