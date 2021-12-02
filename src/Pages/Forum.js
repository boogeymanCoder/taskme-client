import React, { useEffect, useState } from "react";
import { findPostBatch } from "../api/post";
import NewPost from "../Components/NewPost";
import PostList from "../Components/PostList";
import { useAuthCheck } from "../hooks/auth";

export default function Forum() {
  const [postBatch, setPostBatch] = useState(1);
  const [posts, setPosts] = useState([]);
  useAuthCheck("/login");

  console.log("Forum rendered");

  useEffect(() => {
    findPostBatch(20, postBatch).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Forum</h1>
      <NewPost posts={posts} setPosts={setPosts} />
      <br />
      <PostList posts={posts} />
    </div>
  );
}
