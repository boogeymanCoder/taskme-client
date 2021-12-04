import React, { useEffect, useState } from "react";
import { devLog } from "../dev/log";
import Comment from "./Comment";

export default function CommentList({ post }) {
  const [comments, setComments] = useState(post.comments);
  devLog(post.comments);

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
