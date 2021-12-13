import React from "react";
import { Link } from "react-router-dom";

export default function PostView({ post, upHandler }) {
  return (
    <div>
      <Link to={`/post/${post._id}`}>{post.title}</Link>
      <br />
      <span>
        owner:{" "}
        <Link to={`/profile/${post.owner._id}`}>{post.owner.username}</Link>
      </span>

      <br />
      <span>{`body: ${post.body}`}</span>
      <br />
      <span>{`tags: ${post.tags.toString()}`}</span>
      <br />
      <span>{`date: ${new Date(post.date).toLocaleString()}`}</span>
      <br />
      <span>{`comments: ${post.comments.length}`}</span>
      <br />
      <span>{`ups: ${post.ups.length}`}</span>
      <br />
      <input type="button" value="up" onClick={upHandler} />
      <br />
    </div>
  );
}
