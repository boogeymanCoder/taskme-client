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
        <input
          className="btn btn-dark me-1 mb-1"
          type="submit"
          value="Update"
        />
        <input
          className="btn btn-dark mb-1"
          type="button"
          value="Delete"
          onClick={deleteHandler}
        />
      </form>
    </div>
  );
}
