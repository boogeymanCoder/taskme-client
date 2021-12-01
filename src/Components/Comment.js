import React, { useEffect, useState } from "react";
import { findComment } from "../api/comment";

export default function Comment({ commentId }) {
  const [comment, setComment] = useState();

  useEffect(() => {
    findComment(commentId)
      .then((response) => setComment(response.data))
      .catch((error) => console.log(error));
  }, []);

  if (!comment) return <h2>Loading...</h2>;

  return (
    <div>
      <span>{`${comment.owner.username}: ${comment.body}`}</span>
      <br />
      <span>{`date: ${comment.date.toLocaleString()}`}</span>
    </div>
  );
}
