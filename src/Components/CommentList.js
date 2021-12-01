import React, { useEffect, useState } from "react";
import { findCommentBatch } from "../api/comment";
import Comment from "./Comment";

export default function CommentList({ post }) {
  const [comments, setComments] = useState(post.comments);
  console.log(post.comments);

  useEffect(() => {
    setComments(post.comments);
  }, [post]);

  return (
    <div>
      <p>Comment List</p>
      {comments.map((comment, index) => {
        return (
          <div key={comment}>
            <Comment commentId={comment} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
