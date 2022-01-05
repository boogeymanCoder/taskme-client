import React from "react";
import OfferList from "../../Components/Offer/OfferList";

export default function ServicePageView({
  pagination,
  renderService,
  offers,
  setOffers,
}) {
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-md-8">
        {renderService()}
        <OfferList offers={offers} setOffers={setOffers} />
        {pagination}
      </div>
    </div>
  );
}
