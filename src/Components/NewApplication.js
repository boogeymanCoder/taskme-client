import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createApplication } from "../api/application";
import { devLog } from "../dev/log";

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
        devLog(response.data);
        setApplications((lastState) => {
          return [...lastState, response.data];
        });
      })
      .catch((error) => devLog("Application Failed"));
  }

  return (
    <>
      <h2>New Application</h2>
      <form onSubmit={applicationHandler}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Apply" />
      </form>
    </>
  );
}
