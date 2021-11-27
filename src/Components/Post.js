import React from "react";

export default function Post({ post }) {
  return (
    <div>
      <span>{`owner: ${post.owner.username}`}</span>
      <br />
      <span>{`title: ${post.title}`}</span>
      <br />
      <span>{`body: ${post.body}`}</span>
      <br />
      <span>{`tags: ${post.tags.toString()}`}</span>
      <br />
      <span>{`date: ${new Date(post.date).toLocaleString()}`}</span>
      <br />
    </div>
  );
}
