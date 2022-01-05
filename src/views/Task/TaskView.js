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
    <div class="card">
      <div className="card-header">
        <h5 className="card-title">
          <Link to={`/task/${task._id}`}>{task.name}</Link>
        </h5>
        <span
          className="card-subtitle text-muted"
          style={{ fontSize: ".75rem" }}
        >
          id: {task._id}
        </span>
      </div>
      <div class="card-body">
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

        <span className="float-end pe-3">
          {"- "}
          <Link to={`/profile/${task.employer._id}`}>
            {task.employer.username}
          </Link>
        </span>
        {account._id === task.employer._id && (
          <>
            <input type="checkbox" checked={task.open} onChange={handleOpen} />
            <span> Open</span>
            <br />
            <input
              className="btn btn-dark me-1"
              type="button"
              value="Delete"
              onClick={handleDelete}
            />
          </>
        )}
        <input
          className="btn btn-dark"
          type="button"
          value="up"
          style={{
            color: task.ups.includes(account._id) ? "green" : "white",
          }}
          onClick={handleUp}
        />
        <br />
      </div>
    </div>
  );
}
