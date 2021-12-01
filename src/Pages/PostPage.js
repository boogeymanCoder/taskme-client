import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { findPost } from "../api/post";
import CommentList from "../Components/CommentList";
import NewComment from "../Components/NewComment";
import Post from "../Components/Post";

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    findPost(postId)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!post) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Post Page</h1>
      <Post postData={post} />
      <NewComment post={post} setPost={setPost} />
      <CommentList post={post} />
    </div>
  );
}
