import React from "react";

export default function NewApplicationView({
  applicationHandler,
  message,
  setMessage,
}) {
  return (
    <div>
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
    </div>
  );
}
