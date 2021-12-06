import React, { useEffect } from "react";
import Comment from "./Comment";

export default function CommentList({ comments }) {
  if (!comments) return <h2>No Comments Found</h2>;
  else if (comments.length < 1) return <h2>Loading...</h2>;

  return (
    <div>
      <p>Comment List</p>
      {comments.map((comment) => {
        return (
          <div key={comment._id}>
            <Comment comment={comment} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
