import React from "react";

export default function OfferListView({ renderList }) {
  return (
    <div>
      <h2>Offer List</h2>
      {renderList()}
    </div>
  );
}
