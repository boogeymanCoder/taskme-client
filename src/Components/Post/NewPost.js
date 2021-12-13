import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createPost } from "../../api/post";
import NewPostView from "../../views/Post/NewPostView";

export default function NewPost({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const account = useSelector((state) => state.accountLog.account);

  function postHandler(e) {
    e.preventDefault();

    createPost({
      title: title,
      body: body,
      date: new Date(),
      tags: tags,
      owner: account._id,
      comments: [],
      ups: [],
    })
      .then((response) => {
        console.log(response.data);
        const updatedPosts = [...posts, response.data];
        updatedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

        setPosts(updatedPosts);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <NewPostView
      postHandler={postHandler}
      title={title}
      setTitle={setTitle}
      body={body}
      setBody={setBody}
      tags={tags}
      setTags={setTags}
    />
  );
}
