import React from "react";
import { Link } from "react-router-dom";

export default function TaskView({
  task,
  account,
  handleUp,
  handleDelete,
  handleOpen,
}) {
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
