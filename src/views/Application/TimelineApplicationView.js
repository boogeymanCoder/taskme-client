import React from "react";
import { Link } from "react-router-dom";

export default function TimelineApplicationView({ application }) {
  return (
    <div className="card">
      <div className="card-body">
        <span>
          Employee:{" "}
          <Link to={`/profile/${application.employee._id}`}>
            {application.employee.username}
          </Link>
        </span>
        <br />
        <span>
          Task:{" "}
          <Link to={`/task/${application.task._id}`}>
            {application.task.name}
          </Link>
        </span>
        <br />
        <span>{`Message: ${application.message}`}</span> <br />
        <span>{`Date: ${new Date(application.date).toLocaleString()}`}</span>{" "}
        <br />
        <label>Accepted: </label>
        <input type="checkbox" checked={application.accepted} disabled />
        <br />
      </div>
    </div>
  );
}
