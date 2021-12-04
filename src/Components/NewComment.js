import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createComment } from "../api/comment";
import { addPostComment } from "../api/post";
import { devLog } from "../dev/log";

export default function NewComment({ post, setPost }) {
  const account = useSelector((state) => state.accountLog.account);
  const [body, setBody] = useState("");

  devLog("New Comment Received:", post);

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
        devLog("Created Comment:", response.data);
        addPostComment(post._id, response.data)
          .then((response) => {
            devLog("Comment Added:", response.data);

            setPost(response.data);
          })
          .catch((error) => devLog("Comment Adding Failed"));
      })
      .catch((error) => devLog(error));
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
