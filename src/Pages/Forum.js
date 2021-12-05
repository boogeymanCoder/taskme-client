import React, { useEffect, useState } from "react";
import { findPostBatch } from "../api/post";
import NewPost from "../Components/Post/NewPost";
import Pagination from "../Components/Pagination";
import PostList from "../Components/Post/PostList";
import { useAuthCheck } from "../hooks/auth";

export default function Forum() {
  const [postBatch, setPostBatch] = useState(1);
  const [posts, setPosts] = useState();
  const [enableNext, setEnableNext] = useState(false);
  const [enablePrevious, setEnablePrevious] = useState(false);
  useAuthCheck("/login");

  console.log("Forum rendered");

  useEffect(() => {
    var cancel = false;
    findPostBatch(20, postBatch).then((response) => {
      if (cancel) return;

      setPosts(response.data);

      if (response.data.length === 20) setEnableNext(true);
      else setEnableNext(false);

      if (postBatch <= 1) setEnablePrevious(false);
      else setEnablePrevious(true);
    });

    return () => (cancel = true);
  }, [postBatch]);

  return (
    <div>
      <h1>Forum</h1>
      <NewPost posts={posts} setPosts={setPosts} />
      <br />
      <PostList posts={posts} />
      <Pagination
        setPage={setPosts}
        setPageBatch={setPostBatch}
        enablePrevious={enablePrevious}
        setEnablePrevious={setEnablePrevious}
        enableNext={enableNext}
        setEnableNext={setEnableNext}
      />
    </div>
  );
}
