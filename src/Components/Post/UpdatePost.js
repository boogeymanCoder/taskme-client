import React, { useState } from "react";
import { updatePost } from "../../api/post";
import ArrayInput from "../ArrayInput";

export default function UpdatePost({ post }) {
  const [title, setTitle] = useState(post ? post.title : undefined);
  const [body, setBody] = useState(post ? post.body : undefined);
  const [tags, setTags] = useState(post ? post.tags : []);

  function updateHandler(e) {
    e.preventDefault();
    updatePost(post._id, {
      title: title,
      body: body,
      tags: tags,
      date: new Date(),
    })
      .then((response) => {
        for (var attribute in response.data) {
          post[attribute] = response.data[attribute];
        }
      })
      .catch((error) => console.log(error));
  }

  if (!post) return <h2>Loading...</h2>;

  return (
    <form onSubmit={updateHandler}>
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
      <br />
      <input type="submit" value="Update" />
    </form>
  );
}
