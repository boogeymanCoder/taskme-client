import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { countAcceptedApplication } from "../../api/application";
import { deleteTask, toggleOpenTask, upToggleTask } from "../../api/task";

export default function Task({ taskData, setTasks }) {
  const account = useSelector((state) => state.accountLog.account);
  const [task, setTask] = useState(taskData);
  const navigate = useNavigate();

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

  function handleDelete(e) {
    console.log("delete");
    countAcceptedApplication(task._id)
      .then((response) => {
        console.log("response to delete:", response);
        if (response.data > 0) {
          console.log("has accepted");
          return alert("Cannot Delete Task with Accepted Applications");
        }
        console.log("no accepted");
        if (!window.confirm("This action cannot be undone, are you sure?"))
          return;
        deleteTask(task._id)
          .then((response) => {
            if (setTasks) {
              setTasks((lastState) => {
                var updatedTasks = [...lastState];
                console.log(updatedTasks.indexOf(taskData));
                updatedTasks.splice(updatedTasks.indexOf(taskData), 1);
                return updatedTasks;
              });
              navigate("/");
            }
          })
          .catch((error) => console.log(error));
      })
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
          <br />
          <input type="button" value="Delete" onClick={handleDelete} />
        </>
      )}
    </div>
  );
}
