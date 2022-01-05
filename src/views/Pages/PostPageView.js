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
    <div className="row justify-content-center pt-5">
      <div className="col-md-8">
        {renderPost()}
        <NewComment post={post} setPost={setPost} />
        <CommentList comments={comments} />
        {pagination}
      </div>
    </div>
  );
}
