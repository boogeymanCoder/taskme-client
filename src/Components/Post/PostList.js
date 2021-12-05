import React from "react";
import Post from "./Post";

export default function PostList({ posts }) {
  console.log("PostList rendered");

  console.log(posts);

  if (!posts) return <h2>Loading...</h2>;
  else if (posts.length < 1) return <h2>No Posts Found</h2>;

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
