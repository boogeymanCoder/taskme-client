import React from "react";

export default function NewApplicationView({
  applicationHandler,
  message,
  setMessage,
}) {
  return (
    <div className="mt-2">
      <h2>New Application</h2>
      <form onSubmit={applicationHandler}>
        <textarea
          className="form-control"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
        ></textarea>
        <br />
        <input className="btn btn-dark float-end" type="submit" value="Apply" />
      </form>
    </div>
  );
}
