import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createPost } from "../../api/post";
import ArrayInput from "../ArrayInput";

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
    <form onSubmit={postHandler}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <br />
      <ArrayInput array={tags} setArray={setTags} placeholder="tag1 tag2 ..." />
      <input type="submit" value="Post" />
    </form>
  );
}
