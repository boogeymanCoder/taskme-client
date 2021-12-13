import React from "react";
import ArrayInput from "../../Components/ArrayInput";

export default function UpdatePostView({
  updateHandler,
  title,
  setTitle,
  body,
  setBody,
  tags,
  setTags,
  deleteHandler,
}) {
  return (
    <div>
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
        <ArrayInput
          array={tags}
          setArray={setTags}
          placeholder="tag1 tag2 ..."
        />
        <br />
        <input type="submit" value="Update" />
        <br />
        <input type="button" value="Delete" onClick={deleteHandler} />
      </form>
    </div>
  );
}
