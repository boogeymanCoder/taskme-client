import React, { useState } from "react";

export default function Main() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [skill, setSkill] = useState("");
  const [details, setDetails] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState(0);

  function handleTags(e) {
    if (e.nativeEvent.data === " ") {
      setTags([...tags, tag.trim()]);
      setTag(" ");
      return;
    } else if (
      e.nativeEvent.data === null &&
      e.target.value === "" &&
      tags.length > 0
    ) {
      const lastTag = tags.pop();
      setTags([...tags]);
      setTag(lastTag);
      return;
    }
    setTag(e.target.value);
  }

  // TODO function post()

  return (
    <>
      <h2>New Task</h2>
      <form>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Title"
          required
        />
        <br />
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
        />
        <br />
        <input
          type="text"
          name="skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Skill"
          required
        />
        <br />
        <textarea
          type="text"
          name="details"
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
          name="tags"
          value={tag}
          onInput={handleTags}
          placeholder="tag1 tag2 ..."
        />
        <br />
        <select
          name="currency"
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
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <br />
        <input type="submit" value="Post" />
      </form>
    </>
  );
}
