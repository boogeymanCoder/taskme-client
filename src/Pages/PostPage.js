import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { findPost } from "../api/post";
import CommentList from "../Components/Comment/CommentList";
import NewComment from "../Components/Comment/NewComment";
import Pagination from "../Components/Pagination";
import Post from "../Components/Post/Post";
import { useAuthCheck } from "../hooks/auth";

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  const [commentBatch, setCommentBatch] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  const [enablePrevious, setEnablePrevious] = useState(false);

  useAuthCheck("/login");

  useEffect(() => {
    var cancel = false;
    findPost(postId)
      .then((response) => {
        if (cancel) return;
        setPost(response.data);
      })
      .catch((error) => console.log(error));

    return () => {
      cancel = true;
    };
  }, [postId]);

  useEffect(() => {
    if (!post) return;
    setComments((lastState) => {
      var updatedComments = [...post.comments];

      console.log("Before slice:", updatedComments);
      updatedComments = updatedComments.slice(
        (commentBatch - 1) * 20,
        commentBatch * 20
      );
      console.log("After slice:", updatedComments);

      if (updatedComments.length === 20) setEnableNext(true);
      else setEnableNext(false);

      if (commentBatch <= 1) setEnablePrevious(false);
      else setEnablePrevious(true);

      return updatedComments;
    });
  }, [post, commentBatch]);

  if (!post) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Post Page</h1>
      <Post postData={post} />
      <NewComment post={post} setPost={setPost} />
      <CommentList comments={comments} />
      <Pagination
        setPage={setComments}
        setPageBatch={setCommentBatch}
        enablePrevious={enablePrevious}
        setEnablePrevious={setEnablePrevious}
        enableNext={enableNext}
        setEnableNext={setEnableNext}
      />
    </div>
  );
}
