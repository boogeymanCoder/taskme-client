import React, { useEffect, useState } from "react";
import { findPostBatch } from "../api/post";
import Post from "./Post";

export default function PostList() {
  const [postBatch, setPostBatch] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    findPostBatch(20, postBatch).then((response) => {
      setPosts(response.data);
    });
  }, []);

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
