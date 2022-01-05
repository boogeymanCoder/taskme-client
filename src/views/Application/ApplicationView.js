import React from "react";
import { Link } from "react-router-dom";

export default function ApplicationView({
  application,
  acceptHandler,
  disableAccept,
  account,
  editHandler,
  cancelHandler,
}) {
  return (
    <div className="card mb-1">
      <div className="card-body">
        <span>
          Employee:{" "}
          <Link to={`/profile/${application.employee._id}`}>
            {application.employee.username}
          </Link>
        </span>
        <br />
        <span>{`Message: ${application.message}`}</span> <br />
        <span>{`Date: ${new Date(application.date).toLocaleString()}`}</span>{" "}
        <br />
        <input
          type="checkbox"
          checked={application.accepted}
          onChange={acceptHandler}
          disabled={disableAccept}
        />
        <span> Accepted</span>
        <br />
        {account && account._id === application.employee._id && (
          <>
            <input
              className="btn btn-dark me-1"
              type="button"
              value="edit"
              onClick={editHandler}
            />
            <input
              className="btn btn-dark"
              type="button"
              value="cancel"
              onClick={cancelHandler}
            />
            <br />
          </>
        )}
      </div>
    </div>
  );
}
