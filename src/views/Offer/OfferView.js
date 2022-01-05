import React from "react";
import { Link } from "react-router-dom";

export default function OfferView({ offer, account, deleteHandler }) {
  return (
    <div className="card mb-1">
      <div className="card-body">
        <span>
          Sender:{" "}
          <Link to={`/profile/${offer.sender._id}`}>
            {offer.sender.username}
          </Link>
        </span>
        <br />
        <span>Date: {new Date(offer.date).toLocaleString()}</span>
        <br />
        <span>
          Task:{" "}
          {offer.task ? (
            <Link to={`/task/${offer.task._id}`}>{offer.task.name}</Link>
          ) : (
            "Deleted"
          )}{" "}
        </span>
        <br />
        {account._id === offer.receiver._id && (
          <input
            className="btn btn-dark"
            type="button"
            value="Delete"
            onClick={deleteHandler}
          />
        )}
      </div>
    </div>
  );
}
