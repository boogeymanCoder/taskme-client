import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findComment } from "../api/comment";

export default function Comment({ commentId }) {
  const [comment, setComment] = useState();

  useEffect(() => {
    var cancel = false;
    findComment(commentId)
      .then((response) => {
        if (cancel) return;
        setComment(response.data);
      })
      .catch((error) => console.log(error));
    return () => {
      cancel = true;
    };
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
      <span>{`date: ${new Date(comment.date).toLocaleString()}`}</span>
    </div>
  );
}
