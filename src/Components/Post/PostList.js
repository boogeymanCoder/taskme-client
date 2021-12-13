import React from "react";
import PostListView from "../../views/Post/PostListView";

export default function PostList({ posts }) {
  console.log("PostList rendered");

  console.log(posts);

  if (!posts) return <h2>Loading...</h2>;
  else if (posts.length < 1) return <h2>No Posts Found</h2>;

  return <PostListView posts={posts} />;
}
