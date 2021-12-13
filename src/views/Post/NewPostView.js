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
        <ArrayInput
          array={tags}
          setArray={setTags}
          placeholder="tag1 tag2 ..."
        />
        <br />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
}
