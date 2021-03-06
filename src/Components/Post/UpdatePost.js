import React, { useState } from "react";
import { useNavigate } from "react-router";
import { deletePostComments } from "../../api/comment";
import { deletePost, updatePost } from "../../api/post";
import UpdatePostView from "../../views/Post/UpdatePostView";

export default function UpdatePost({ post }) {
  const [title, setTitle] = useState(post ? post.title : undefined);
  const [body, setBody] = useState(post ? post.body : undefined);
  const [tags, setTags] = useState(post ? post.tags : []);
  const navigate = useNavigate();

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

  function deleteHandler(e) {
    if (!window.confirm("This action cannot be undone, are you sure?")) return;
    deletePost(post._id)
      .then((response) => {
        console.log("deleted post");
        deletePostComments(post._id)
          .then((response) => {
            console.log("deleted comments");
            navigate("/forum");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }

  if (!post) return <h2>Loading...</h2>;

  return (
    <UpdatePostView
      updateHandler={updateHandler}
      title={title}
      setTitle={setTitle}
      body={body}
      setBody={setBody}
      tags={tags}
      setTags={setTags}
      deleteHandler={deleteHandler}
    />
  );
}
