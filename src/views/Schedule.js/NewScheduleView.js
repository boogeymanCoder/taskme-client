import React from "react";

export default function NewScheduleView({
  addHandler,
  start,
  setStart,
  end,
  setEnd,
  label,
  setLabel,
}) {
  return (
    <div>
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
    </div>
  );
}
