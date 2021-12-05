import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { upTogglePost } from "../../api/post";

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

  return (
    <div>
      <Link to={`/post/${post._id}`}>{post.title}</Link>
      <br />
      <span>
        owner:{" "}
        <Link to={`/profile/${post.owner._id}`}>{post.owner.username}</Link>
      </span>

      <br />
      <span>{`body: ${post.body}`}</span>
      <br />
      <span>{`tags: ${post.tags.toString()}`}</span>
      <br />
      <span>{`date: ${new Date(post.date).toLocaleString()}`}</span>
      <br />
      <span>{`comments: ${post.comments.length}`}</span>
      <br />
      <span>{`ups: ${post.ups.length}`}</span>
      <br />
      <input type="button" value="up" onClick={upHandler} />
      <br />
    </div>
  );
}
