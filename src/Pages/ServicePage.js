import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { findServiceOffers, findServiceOffersBatch } from "../api/offer";
import { findService } from "../api/service";
import OfferList from "../Components/OfferList";
import Service from "../Components/Service";
import { useAuthCheck } from "../hooks/auth";

export default function ServicePage() {
  const { serviceId } = useParams();
  const [offerBatch, setOfferBatch] = useState(1);
  const [service, setService] = useState();
  const [offers, setOffers] = useState();

  useAuthCheck("/login");

  useEffect(() => {
    findService(serviceId)
      .then((response) => setService(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (!service) return null;
    findServiceOffersBatch(20, offerBatch, service._id)
      .then((response) => setOffers(response.data))
      .catch((error) => console.log(error));
  }, [service]);

  if (!service) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Service Page</h1>
      <Service service={service} setOffers={setOffers} />
      <OfferList offers={offers} setOffers={setOffers} />
    </div>
  );
}
