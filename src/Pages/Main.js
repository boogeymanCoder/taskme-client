import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createConversation } from "../api/conversation";
import { createMessage } from "../api/message";
import { createTask, findTaskBatch } from "../api/task";
import Task from "../Components/Task";
import { useAuthCheck } from "../hooks/auth";

export default function Main() {
  const account = useSelector((state) => state.accountLog.account);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [skill, setSkill] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState(0);
  const [taskBatch, setTaskBatch] = useState(1);
  const [tasks, setTasks] = useState([]);

  useAuthCheck("/", "/login");

  useEffect(() => {
    findTaskBatch(20, taskBatch).then((response) => {
      setTasks(response.data);
    });
  }, []);

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
          date: new Date(date),
          open: true,
          currency: currency,
          price: price,
          ups: [],
          taskConversation: response.data,
        }).then((response) => {
          setTasks([...tasks, response.data]);
        });
      });
    });
  }

  function renderTasks() {
    return tasks.map((task) => {
      console.log(task);
      return <Task key={task._id} task={task} />;
    });
  }

  return (
    <>
      <h2>New Task</h2>
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
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => {
            console.log(e.target.value);
            setDate(e.target.value);
          }}
          placeholder="Date"
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
      {renderTasks()}
    </>
  );
}
