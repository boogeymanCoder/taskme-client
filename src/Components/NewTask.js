import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createConversation } from "../api/conversation";
import { createMessage } from "../api/message";
import { createTask } from "../api/task";

export default function NewTask({ tasks, setTasks }) {
  const account = useSelector((state) => state.accountLog.account);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [skill, setSkill] = useState("");
  const [details, setDetails] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState(0);

  function addTag() {
    const newTag = tag.trim();
    if (newTag !== "") {
      if (!tags.includes(newTag)) setTags([...tags, newTag]);
    }
    setTag(" ");
  }

  function handleTagsBlur(e) {
    addTag();
  }

  function handleTags(e) {
    if (e.nativeEvent.data === " ") {
      addTag();
      return;
    } else if (
      e.nativeEvent.data === null &&
      e.target.value === "" &&
      tags.length > 0
    ) {
      const lastTag = tags.pop();
      setTags([...tags]);
      setTag(" " + lastTag);
      return;
    }
    setTag(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // create conversation
    createMessage({
      replyTo: null,
      sender: account._id,
      message: `Welcome to ${name}`,
      date: new Date(),
    }).then((response) => {
      createConversation({
        name: name,
        members: [account._id],
        messages: [response.data],
      }).then((response) => {
        createTask({
          employer: account._id,
          name: name,
          details: details,
          tags: tags,
          location: location,
          skill: skill,
          date: new Date(),
          open: true,
          currency: currency,
          price: price,
          ups: [],
          taskConversation: response.data,
        }).then((response) => {
          const updatedTasks = [...tasks, response.data];
          updatedTasks.sort((a, b) => new Date(b.date) - new Date(a.date));

          setTasks(updatedTasks);
          console.log("conversation created");
        });
      });
    });
  }

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
