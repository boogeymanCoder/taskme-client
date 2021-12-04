import React, { useEffect, useState } from "react";
import { findPostBatch } from "../api/post";
import NewPost from "../Components/NewPost";
import PostList from "../Components/PostList";
import { useAuthCheck } from "../hooks/auth";

export default function Forum() {
  const [postBatch, setPostBatch] = useState(1);
  const [posts, setPosts] = useState();
  const [enableNext, setEnableNext] = useState(false);
  const [enablePrevious, setEnablePrevious] = useState(false);
  useAuthCheck("/login");

  console.log("Forum rendered");

  useEffect(() => {
    var subscribe = true;
    findPostBatch(20, postBatch).then((response) => {
      if (!subscribe) return;

      setPosts(response.data);

      if (response.data.length > 0) setEnableNext(true);
      else setEnableNext(false);

      if (postBatch <= 1) setEnablePrevious(false);
      else setEnablePrevious(true);
    });

    return () => (subscribe = false);
  }, [postBatch]);

  return (
    <div>
      <h1>Forum</h1>
      <NewPost posts={posts} setPosts={setPosts} />
      <br />
      <PostList posts={posts} />
      <input
        type="button"
        value="Previous"
        onClick={(e) => {
          setPostBatch((lastState) =>
            lastState > 1 ? lastState - 1 : lastState
          );
          setPosts();
          setEnableNext(false);
          setEnablePrevious(false);
        }}
        disabled={!enablePrevious}
      />
      <input
        type="button"
        value="Next"
        onClick={(e) => {
          setPostBatch((lastState) => lastState + 1);
          setPosts();
          setEnableNext(false);
          setEnablePrevious(false);
        }}
        disabled={!enableNext}
      />
    </div>
  );
}
