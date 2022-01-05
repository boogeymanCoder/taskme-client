import React from "react";

export default function NewCommentView({ commentHandler, body, setBody }) {
  return (
    <div>
      <form onSubmit={commentHandler}>
        <textarea
          className="form-control mb-1"
          type="text"
          value={body}
          placeholder="New Comment"
          onChange={(e) => setBody(e.target.value)}
          rows="5"
        ></textarea>
        <input
          className="btn btn-dark float-end"
          type="submit"
          value="Submit"
        />
        <br />
        <br />
      </form>
    </div>
  );
}
