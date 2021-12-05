import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findAccountById } from "../../api/account";

export default function Comment({ comment }) {
  const [owner, setOwner] = useState();

  useEffect(() => {
    var cancel = false;
    findAccountById(comment.owner)
      .then((response) => {
        if (cancel) return;
        setOwner(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      cancel = true;
    };
  }, [comment]);

  if (!comment || !owner) return <h2>Loading...</h2>;

  return (
    <div>
      <span>
        <Link to={`/profile/${owner._id}`}>{owner.username}</Link>:{" "}
        {comment.body}
      </span>
      <br />
      <span>{`date: ${new Date(comment.date).toLocaleString()}`}</span>
    </div>
  );
}
