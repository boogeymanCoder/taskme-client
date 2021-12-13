import React from "react";
import { useSelector } from "react-redux";
import { deleteOffer } from "../../api/offer";
import OfferView from "../../views/Offer/OfferView";

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
          console.log("Deleted Offer");
          setOffers((lastState) => {
            const updatedOffers = [...lastState];
            console.log("before remove:", updatedOffers);
            updatedOffers.splice(updatedOffers.indexOf(offer), 1);
            console.log("after remove:", updatedOffers);
            return [...updatedOffers];
          });
        })
        .catch((error) => console.log(error));
  }

  return (
    <OfferView offer={offer} account={account} deleteHandler={deleteHandler} />
  );
}
