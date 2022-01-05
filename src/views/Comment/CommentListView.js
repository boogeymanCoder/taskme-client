import React from "react";
import Comment from "../../Components/Comment/Comment";

export default function CommentListView({ comments }) {
  return (
    <div>
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
