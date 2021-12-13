import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createConversation } from "../../api/conversation";
import { createMessage } from "../../api/message";
import { createTask } from "../../api/task";
import NewTaskView from "../../views/Task/NewTaskView";

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
    <NewTaskView
      handleSubmit={handleSubmit}
      name={name}
      setName={setName}
      location={location}
      setLocation={setLocation}
      skill={skill}
      setSkill={setSkill}
      details={details}
      setDetails={setDetails}
      tag={tag}
      tags={tags}
      handleTags={handleTags}
      handleTagsBlur={handleTagsBlur}
      currency={currency}
      setCurrency={setCurrency}
      price={price}
      setPrice={setPrice}
    />
  );
}
