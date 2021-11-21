import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Task({ task }) {
  const [employer, setEmployer] = useState("");

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_HOST}/api/account/id/${task.employer}`,
        { withCredentials: true }
      )
      .then((response) => {
        setEmployer(response.data.username);
      });
  });

  return (
    <p key={task._id}>
      <span>{`employer: ${employer}`}</span>
      <br />
      <span>{`name: ${task.name}`}</span>
      <br />
      <span>{`details: ${task.details}`}</span>
      <br />
      <span>{`tags: ${task.tags.toString()}`}</span>
      <br />
      <span>{`location: ${task.location}`}</span>
      <br />
      <span>{`skill: ${task.skill}`}</span>
      <br />
      <span>{`date: ${task.date.toString()}`}</span>
      <br />
      <span>{`open: ${task.open}`}</span>
      <br />
      <span>{`currency: ${task.currency}`}</span>
      <br />
      <span>{`price: ${task.price}`}</span>
      <br />
      <span>{`ups: ${task.ups.length}`}</span>
      <br />
    </p>
  );
}
