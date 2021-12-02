import React from "react";
import { Link } from "react-router-dom";

// TODO add ups

export default function Service({ service }) {
  return (
    <div>
      <span>{service.name}</span>
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
    </div>
  );
}
