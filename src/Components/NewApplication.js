import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createApplication } from "../api/application";

export default function NewApplication({ task }) {
  const account = useSelector((state) => state.accountLog.account);
  const [message, setMessage] = useState("");

  function applicationHandler(e) {
    e.preventDefault();
    createApplication({
      accepted: false,
      date: new Date(),
      employee: account._id,
      message: message,
      task: task,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log("Application Failed"));
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
