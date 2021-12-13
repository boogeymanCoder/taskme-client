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
    <div>
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
      <label>Accepted: </label>
      <input
        type="checkbox"
        checked={application.accepted}
        onChange={acceptHandler}
        disabled={disableAccept}
      />
      <br />
      {account && account._id === application.employee._id && (
        <>
          <input type="button" value="edit" onClick={editHandler} />
          <input type="button" value="cancel" onClick={cancelHandler} />
          <br />
        </>
      )}
      <br />
    </div>
  );
}
