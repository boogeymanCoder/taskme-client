import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findComment } from "../api/comment";
import { devLog } from "../dev/log";

export default function Comment({ commentId }) {
  const [comment, setComment] = useState();

  useEffect(() => {
    findComment(commentId)
      .then((response) => setComment(response.data))
      .catch((error) => devLog(error));
  }, [commentId]);

  if (!comment) return <h2>Loading...</h2>;

  return (
    <div>
      <span>
        <Link to={`/profile/${comment.owner._id}`}>
          {comment.owner.username}
        </Link>
        : {comment.body}
      </span>
      <br />
      <span>{`date: ${comment.date.toLocaleString()}`}</span>
    </div>
  );
}
