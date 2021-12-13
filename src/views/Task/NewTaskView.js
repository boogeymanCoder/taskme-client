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
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Title"
          required
        />
        <br />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
        />
        <br />
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Skill"
          required
        />
        <br />
        <textarea
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Details"
          required
        ></textarea>
        <br />
        <span>Tags: {tags.length ? tags.toString() : "None"}</span>
        <br />
        <input
          type="text"
          value={tag}
          onInput={handleTags}
          onBlur={handleTagsBlur}
          placeholder="tag1 tag2 ..."
        />
        <br />
        <select
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
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <br />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
}
