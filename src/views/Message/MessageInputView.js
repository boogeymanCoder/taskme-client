import React from "react";

export default function MessageInputView({ sendHandler, setMessage, message }) {
  return (
    <div className="row justify-content-center pt-5 fixed-bottom m-2">
      <div className="col-md-8">
        <form onSubmit={sendHandler}>
          <textarea
            className="form-control"
            type="text"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            rows="5"
          ></textarea>
          <input
            className="btn btn-dark float-end"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
}
