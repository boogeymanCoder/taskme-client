import React from "react";
import Post from "./Post";

export default function PostList({ posts }) {
  console.log("PostList rendered");
  return (
    <>
      {posts.map((post, index) => {
        return (
          <div key={post._id}>
            <Post postData={post} />
            <br />
          </div>
        );
      })}
    </>
  );
}
