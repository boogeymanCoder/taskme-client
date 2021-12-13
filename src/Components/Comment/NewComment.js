import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createComment } from "../../api/comment";
import { addPostComment } from "../../api/post";
import NewCommentView from "../../views/Comment/NewCommentView";

export default function NewComment({ post, setPost }) {
  const account = useSelector((state) => state.accountLog.account);
  const [body, setBody] = useState("");

  console.log("New Comment Received:", post);
  console.log("Account:", account);

  function commentHandler(e) {
    e.preventDefault();

    createComment({
      body: body,
      date: new Date(),
      owner: account._id,
      replies: [],
      ups: [],
    })
      .then((response) => {
        console.log("Created Comment:", response.data);
        addPostComment(post._id, response.data)
          .then((response) => {
            console.log("Comment Added:", response.data);

            setPost(response.data);
          })
          .catch((error) => console.log("Comment Adding Failed"));
      })
      .catch((error) => console.log(error));
  }

  return (
    <NewCommentView
      commentHandler={commentHandler}
      body={body}
      setBody={setBody}
    />
  );
}
