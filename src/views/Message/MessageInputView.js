import React from "react";

export default function MessageInputView({ sendHandler, setMessage, message }) {
  return (
    <div>
      <form onSubmit={sendHandler}>
        <input
          type="text"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
