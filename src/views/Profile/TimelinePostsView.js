import React from "react";
import PostList from "../../Components/Post/PostList";

export default function TimelinePostsView({ posts, pagination }) {
  return (
    <div>
      <PostList posts={posts} />
      {pagination}
    </div>
  );
}
