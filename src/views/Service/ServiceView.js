import React from "react";
import { Link } from "react-router-dom";

export default function ServiceView({ service, offerHandler, account }) {
  return (
    <div>
      <Link to={`/service/${service._id}`}>{service.name}</Link>
      <br />
      <span>
        employee:{" "}
        <Link to={`/profile/${service.owner._id}`}>
          {service.owner.username}
        </Link>
      </span>
      <br />
      <span>{`details: ${service.details}`}</span>
      <br />
      <span>{`tags: ${service.tags.toString()}`}</span>
      <br />
      <span>{`currency: ${service.currency}`}</span>
      <br />
      <span>{`price: ${service.price}`}</span>
      <br />
      {account._id !== service.owner._id && (
        <>
          <input type="button" value="Send Offer" onClick={offerHandler} />
          <br />
        </>
      )}
    </div>
  );
}
