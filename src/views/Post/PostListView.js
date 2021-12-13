import React from "react";
import Post from "../../Components/Post/Post";

export default function PostListView({ posts }) {
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <div key={post._id}>
            <Post postData={post} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
