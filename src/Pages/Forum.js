import React from "react";
import NewPost from "../Components/NewPost";
import PostList from "../Components/PostList";
import { useAuthCheck } from "../hooks/auth";

export default function Forum() {
  useAuthCheck("/forum", "/login");
  return (
    <div>
      <h1>Forum</h1>
      <NewPost />
      <PostList />
    </div>
  );
}
