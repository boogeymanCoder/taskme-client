import React from "react";

export default function NewCommentView({ commentHandler, body, setBody }) {
  return (
    <div>
      <h2>New Comment</h2>
      <form onSubmit={commentHandler}>
        <textarea
          type="text"
          value={body}
          placeholder="New Comment"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
