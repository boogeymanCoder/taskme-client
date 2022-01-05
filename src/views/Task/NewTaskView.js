import React from "react";

export default function NewTaskView({
  handleSubmit,
  name,
  setName,
  location,
  setLocation,
  skill,
  setSkill,
  details,
  setDetails,
  tag,
  tags,
  handleTags,
  handleTagsBlur,
  currency,
  setCurrency,
  price,
  setPrice,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-1"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          className="form-control mb-1"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
        />
        <input
          className="form-control mb-1"
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Skill"
          required
        />
        <textarea
          className="form-control mb-1"
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Details"
          required
          rows="5"
        ></textarea>
        <span>Tags: {tags.length ? tags.toString() : "None"}</span>
        <input
          className="form-control mb-1"
          type="text"
          value={tag}
          onInput={handleTags}
          onBlur={handleTagsBlur}
          placeholder="tag1 tag2 ..."
        />
        <select
          className="form-select mb-1"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          required
        >
          <option value="" defaultValue>
            Currency
          </option>
          <option value="USD">$</option>
          <option value="PHP">₱</option>
        </select>
        <input
          className="form-control mb-1"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <input className="btn btn-dark float-end" type="submit" value="Post" />
      </form>
    </div>
  );
}
