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
          className="form-control mb-1"
          type="datetime-local"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          required
        />
        <span>End:</span>
        <input
          className="form-control mb-1"
          type="datetime-local"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          required
        />
        <input
          className="form-control mb-1"
          type="text"
          placeholder="Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          required
        />
        <input
          className="btn btn-dark float-end"
          type="submit"
          value="Add Schedule"
        />
      </form>
    </div>
  );
}
