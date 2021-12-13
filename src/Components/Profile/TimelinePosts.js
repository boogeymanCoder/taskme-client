import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { findUserPostBatch } from "../../api/post";
import TimelinePostsView from "../../views/Profile/TimelinePostsView";
import Pagination from "../Pagination";

export default function TimelinePosts() {
  const account = useSelector((state) => state.accountLog.account);
  const [posts, setPosts] = useState();
  const [postBatch, setPostBatch] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  const [enablePrevious, setEnablePrevious] = useState(false);

  useEffect(() => {
    var cancel = false;

    findUserPostBatch(20, postBatch, account._id)
      .then((response) => {
        if (cancel) return;
        setPosts((lastState) => {
          const updatedPosts = response.data;

          if (response.data.length === 20) setEnableNext(true);
          else setEnableNext(false);

          if (postBatch <= 1) setEnablePrevious(false);
          else setEnablePrevious(true);

          return updatedPosts;
        });
      })
      .catch((error) => console.log(error));

    return () => {
      cancel = true;
    };
  }, [postBatch, account._id]);

  return (
    <TimelinePostsView
      pagination={
        <Pagination
          setPageBatch={setPostBatch}
          setPage={setPosts}
          enableNext={enableNext}
          setEnableNext={setEnableNext}
          enablePrevious={enablePrevious}
          setEnablePrevious={setEnablePrevious}
        />
      }
      posts={posts}
    />
  );
}
