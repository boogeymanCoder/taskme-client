import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOffer } from "../../api/offer";
import { findTask } from "../../api/task";

// TODO add ups

export default function Service({ service, setOffers }) {
  const account = useSelector((state) => state.accountLog.account);

  function offerHandler(e) {
    const taskId = prompt("Please Enter Task ID:");
    if (!taskId) return;

    findTask(taskId)
      .then((response) => {
        if (response.data.employer === service.owner._id)
          return alert("Cannot Offer Task To Employer");

        createOffer({
          sender: account._id,
          receiver: service.owner._id,
          task: taskId,
          service: service._id,
          accepted: false,
          date: new Date(),
        })
          .then((response) => {
            if (!setOffers) return;
            setOffers((lastState) => {
              const updatedOffers = [response.data, ...lastState];
              return [...updatedOffers];
            });
          })
          .catch((error) => {
            alert(error.response.data);
            console.log(error);
          });
      })
      .catch((error) => {
        if (error.response.status === 404) return alert(error.response.data);
      });
  }

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
