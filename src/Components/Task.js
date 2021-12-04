import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleOpenTask, upToggleTask } from "../api/task";

export default function Task({ taskData }) {
  const account = useSelector((state) => state.accountLog.account);
  const [task, setTask] = useState(taskData);

  useEffect(() => {
    for (var property in task) {
      taskData[property] = task[property];
    }
  }, [task, taskData]);

  function handleUp(e) {
    e.target.disabled = true;
    upToggleTask(task._id, account._id)
      .then((response) => {
        setTask(response.data);
        e.target.disabled = false;
      })
      .catch((error) => console.log("Up Failed"));
  }

  function handleOpen(e) {
    toggleOpenTask(task._id, !task.open)
      .then((response) => setTask(response.data))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <Link to={`/task/${task._id}`}>{task.name}</Link>
      <br />
      <span>id: {task._id}</span>
      <br />
      <span>
        employer:{" "}
        <Link to={`/profile/${task.employer._id}`}>
          {task.employer.username}
        </Link>
      </span>
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
        style={{ color: task.ups.includes(account._id) ? "green" : "initial" }}
        onClick={handleUp}
      />
      <br />
      {account._id === task.employer._id && (
        <>
          <span>open: </span>
          <input type="checkbox" checked={task.open} onChange={handleOpen} />
        </>
      )}
    </div>
  );
}
