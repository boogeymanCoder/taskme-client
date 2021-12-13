import React from "react";
import NewPost from "../../Components/Post/NewPost";
import PostList from "../../Components/Post/PostList";

export default function ForumView({ pagination, posts, setPosts }) {
  return (
    <div>
      <h1>Forum</h1>
      <NewPost posts={posts} setPosts={setPosts} />
      <br />
      <PostList posts={posts} />
      {pagination}
    </div>
  );
}
