import React from "react";
import { devLog } from "../dev/log";
import Post from "./Post";

export default function PostList({ posts }) {
  devLog("PostList rendered");
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
