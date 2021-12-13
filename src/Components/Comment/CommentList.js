import React from "react";
import CommentListView from "../../views/Comment/CommentListView";

export default function CommentList({ comments }) {
  if (!comments) return <h2>No Comments Found</h2>;
  else if (comments.length < 1) return <h2>Loading...</h2>;

  return <CommentListView comments={comments} />;
}
