import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createSchedule } from "../api/schedule";

export default function NewSchedule() {
  const account = useSelector((state) => state.accountLog.account);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [label, setLabel] = useState("");

  function addHandler(e) {
    e.preventDefault();

    createSchedule({ owner: account._id, start: start, end: end, label: label })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={addHandler}>
      <span>Start:</span>
      <br />
      <input
        type="datetime-local"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        required
      />
      <br />
      <span>End:</span>
      <br />
      <input
        type="datetime-local"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        required
      />
      <br />
      <input type="submit" value="Add Schedule" />
    </form>
  );
}
