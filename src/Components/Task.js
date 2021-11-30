import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { upToggleTask } from "../api/task";

export default function Task({ taskData }) {
  const account = useSelector((state) => state.accountLog.account);
  const [task, setTask] = useState(taskData);

  useEffect(() => {
    for (var property in task) {
      taskData[property] = task[property];
    }
  }, [task]);

  function handleUp(e) {
    e.target.disabled = true;
    upToggleTask(task._id, account._id)
      .then((response) => {
        setTask(response.data);
        e.target.disabled = false;
      })
      .catch((error) => console.log("Up Failed"));
  }

  return (
    <div>
      <Link to={`/task/${task._id}`}>{task.name}</Link>
      <br />
      <span>{`employer: ${task.employer.username}`}</span>
      <br />
      <span>{`details: ${task.details}`}</span>
      <br />
      <span>{`tags: ${task.tags.toString()}`}</span>
      <br />
      <span>{`location: ${task.location}`}</span>
      <br />
      <span>{`skill: ${task.skill}`}</span>
      <br />
      <span>{`date: ${new Date(task.date).toLocaleString()}`}</span>
      <br />
      <span>{`open: ${task.open}`}</span>
      <br />
      <span>{`currency: ${task.currency}`}</span>
      <br />
      <span>{`price: ${task.price}`}</span>
      <br />
      <span>{`ups: ${task.ups.length}`}</span>
      <br />
      <input
        type="button"
        value="up"
        color={task.ups.includes(account._id) ? "green" : "default"}
        onClick={handleUp}
      />
    </div>
  );
}
