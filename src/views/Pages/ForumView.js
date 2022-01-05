import React from "react";
import NewPost from "../../Components/Post/NewPost";
import PostList from "../../Components/Post/PostList";

export default function ForumView({ pagination, posts, setPosts }) {
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-md-8">
        <h1>Forum</h1>
        <NewPost posts={posts} setPosts={setPosts} />
        <br />
        <PostList posts={posts} />
        {pagination}
      </div>
    </div>
  );
}
