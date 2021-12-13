import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createApplication } from "../../api/application";
import NewApplicationView from "../../views/Application/NewApplicationView";

export default function NewApplication({
  task,
  applications,
  setApplications,
}) {
  const account = useSelector((state) => state.accountLog.account);
  const [message, setMessage] = useState("");

  function applicationHandler(e) {
    e.preventDefault();

    if (!task.open) return alert("Task was Closed");

    for (var application of applications) {
      if (application.employee._id === account._id) {
        return alert("Applied Already");
      }
    }

    if (account._id === task.employer._id) {
      return alert("Employer Cannot Apply ");
    }

    createApplication({
      accepted: false,
      date: new Date(),
      employee: account._id,
      message: message,
      task: task._id,
    })
      .then((response) => {
        console.log(response.data);
        setApplications((lastState) => {
          return [...lastState, response.data];
        });
      })
      .catch((error) => console.log("Application Failed"));
  }

  return (
    <NewApplicationView
      applicationHandler={applicationHandler}
      message={message}
      setMessage={setMessage}
    />
  );
}
