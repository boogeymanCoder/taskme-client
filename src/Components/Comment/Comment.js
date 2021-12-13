import React, { useEffect, useState } from "react";
import { findAccountById } from "../../api/account";
import CommentView from "../../views/Comment/CommentView";

export default function Comment({ comment }) {
  const [owner, setOwner] = useState();
  console.log("Comment:", comment);

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

  return <CommentView owner={owner} comment={comment} />;
}
