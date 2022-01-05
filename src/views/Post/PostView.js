import React from "react";
import { Link } from "react-router-dom";

export default function PostView({ post, upHandler }) {
  return (
    <div class="card">
      <div className="card-header">
        <h5 className="card-title">
          <Link to={`/post/${post._id}`}>{post.title}</Link>
        </h5>

        <span
          className="card-subtitle text-muted"
          style={{ fontSize: ".75rem" }}
        >
          {new Date(post.date).toLocaleString()}
        </span>
      </div>
      <div class="card-body">
        <span>{`tags: ${post.tags.toString()}`}</span>
        <br />
        <h5>{`${post.body}`}</h5>
        <br />
        <span>{`comments: ${post.comments.length} ups: ${post.ups.length}`}</span>
        <br />

        <span className="float-end pe-3">
          {"- "}
          <Link to={`/profile/${post.owner._id}`}>{post.owner.username}</Link>
        </span>
        <input
          className="btn btn-dark"
          type="button"
          value="up"
          onClick={upHandler}
        />
        <br />
      </div>
    </div>
  );
}
