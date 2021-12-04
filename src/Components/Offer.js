import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createApplication } from "../api/application";
import { deleteOffer, toggleAcceptOffer } from "../api/offer";

export default function Offer({ offerData, setOffers }) {
  const account = useSelector((state) => state.accountLog.account);
  const [offer, setOffer] = useState(offerData);

  function deleteHandler(e) {
    if (
      window.confirm(
        "This action can't be undone, are you sure you want to delete?"
      )
    )
      deleteOffer(offer._id)
        .then(() => {
          console.log("Deleted Offer");
          setOffers((lastState) => {
            const updatedOffers = [...lastState];
            console.log("before remove:", updatedOffers);
            updatedOffers.splice(updatedOffers.indexOf(offerData), 1);
            console.log("after remove:", updatedOffers);
            return [...updatedOffers];
          });
        })
        .catch((error) => console.log(error));
  }

  return (
    <div>
      <span>
        Sender:{" "}
        <Link to={`/profile/${offer.sender._id}`}>{offer.sender.username}</Link>
      </span>
      <br />
      <span>Date: {new Date(offer.date).toLocaleString()}</span>
      <br />
      <span>
        Task: <Link to={`/task/${offer.task._id}`}>{offer.task.name}</Link>
      </span>
      <br />
      {account._id === offer.receiver._id && (
        <input type="button" value="Delete" onClick={deleteHandler} />
      )}
    </div>
  );
}
