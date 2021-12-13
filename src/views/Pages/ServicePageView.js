import React from "react";
import OfferList from "../../Components/Offer/OfferList";

export default function ServicePageView({
  pagination,
  renderService,
  offers,
  setOffers,
}) {
  return (
    <div>
      <h1>Service Page</h1>
      {renderService()}
      <OfferList offers={offers} setOffers={setOffers} />
      {pagination}
    </div>
  );
}
