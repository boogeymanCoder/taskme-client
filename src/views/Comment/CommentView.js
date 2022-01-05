import React from "react";
import { Link } from "react-router-dom";

export default function CommentView({ owner, comment }) {
  return (
    <div className="card mb-1">
      <div className="card-body">
        <span>
          <Link to={`/profile/${owner._id}`}>{owner.username}</Link>:{" "}
          {comment.body}
        </span>
        <br />
        <span>{`date: ${new Date(comment.date).toLocaleString()}`}</span>
      </div>
    </div>
  );
}
