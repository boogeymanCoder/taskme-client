import React from "react";
import ArrayInput from "../../Components/ArrayInput";

export default function NewPostView({
  postHandler,
  title,
  setTitle,
  body,
  setBody,
  tags,
  setTags,
}) {
  return (
    <div>
      <form onSubmit={postHandler}>
        <input
          className="form-control mb-1"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="form-control mb-1"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <ArrayInput
          array={tags}
          setArray={setTags}
          placeholder="tag1 tag2 ..."
        />
        <input className="btn btn-dark float-end" type="submit" value="Post" />
        <br />
      </form>
    </div>
  );
}
