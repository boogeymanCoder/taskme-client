import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createComment } from "../api/comment";
import { addPostComment } from "../api/post";

export default function NewComment({ post, setPost }) {
  const account = useSelector((state) => state.accountLog.account);
  const [body, setBody] = useState("");

  console.log("New Comment Received:", post);

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
    <div>
      <h2>New Comment</h2>
      <form onSubmit={commentHandler}>
        <textarea
          type="text"
          value={body}
          placeholder="New Comment"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
