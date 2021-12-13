import React, { useEffect, useState } from "react";
import { findPostBatch } from "../api/post";
import Pagination from "../Components/Pagination";
import { useAuthCheck } from "../hooks/auth";
import ForumView from "../views/Pages/ForumView";

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
    <ForumView
      pagination={
        <Pagination
          setPage={setPosts}
          setPageBatch={setPostBatch}
          enablePrevious={enablePrevious}
          setEnablePrevious={setEnablePrevious}
          enableNext={enableNext}
          setEnableNext={setEnableNext}
        />
      }
      posts={posts}
      setPosts={setPosts}
    />
  );
}
