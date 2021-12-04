import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteOffer } from "../api/offer";
import { devLog } from "../dev/log";

export default function Offer({ offer, setOffers }) {
  const account = useSelector((state) => state.accountLog.account);

  function deleteHandler(e) {
    if (
      window.confirm(
        "This action can't be undone, are you sure you want to delete?"
      )
    )
      deleteOffer(offer._id)
        .then(() => {
          devLog("Deleted Offer");
          setOffers((lastState) => {
            const updatedOffers = [...lastState];
            devLog("before remove:", updatedOffers);
            updatedOffers.splice(updatedOffers.indexOf(offer), 1);
            devLog("after remove:", updatedOffers);
            return [...updatedOffers];
          });
        })
        .catch((error) => devLog(error));
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
