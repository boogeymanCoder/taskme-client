import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { upTogglePost } from "../../api/post";
import PostView from "../../views/Post/PostView";

export default function Post({ postData }) {
  const account = useSelector((state) => state.accountLog.account);
  const [post, setPost] = useState(postData);

  useEffect(() => {
    for (var property in post) {
      postData[property] = post[property];
    }
  }, [post, postData]);

  function upHandler(e) {
    e.target.disabled = true;
    upTogglePost(post._id, account._id)
      .then((response) => {
        setPost(response.data);
        e.target.disabled = false;
      })
      .catch((error) => console.log("Up Failed"));
  }

  return <PostView post={post} upHandler={upHandler} />;
}
