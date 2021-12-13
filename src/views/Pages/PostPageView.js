import React from "react";
import CommentList from "../../Components/Comment/CommentList";
import NewComment from "../../Components/Comment/NewComment";

export default function PostPageView({
  pagination,
  renderPost,
  post,
  setPost,
  comments,
}) {
  return (
    <div>
      <h1>Post Page</h1>
      {renderPost()}
      <NewComment post={post} setPost={setPost} />
      <CommentList comments={comments} />
      {pagination}
    </div>
  );
}
