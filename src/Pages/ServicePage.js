import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { findServiceOffersBatch } from "../api/offer";
import { findService } from "../api/service";
import OfferList from "../Components/OfferList";
import Pagination from "../Components/Pagination";
import Service from "../Components/Service";
import { useAuthCheck } from "../hooks/auth";

export default function ServicePage() {
  const { serviceId } = useParams();
  const [offerBatch, setOfferBatch] = useState(1);
  const [service, setService] = useState();
  const [offers, setOffers] = useState();
  const [enableNext, setEnableNext] = useState(false);
  const [enablePrevious, setEnablePrevious] = useState(false);

  useAuthCheck("/login");

  useEffect(() => {
    var cancel = false;
    findService(serviceId)
      .then((response) => {
        if (cancel) return;
        setService(response.data);
      })
      .catch((error) => console.log(error));

    return () => {
      cancel = true;
    };
  }, [serviceId]);

  useEffect(() => {
    if (!service) return null;
    var cancel = false;
    findServiceOffersBatch(20, offerBatch, service._id)
      .then((response) => {
        if (cancel) return;
        setOffers(response.data);

        if (response.data.length === 20) setEnableNext(true);
        else setEnableNext(false);

        if (offerBatch <= 1) setEnablePrevious(false);
        else setEnablePrevious(true);
      })
      .catch((error) => console.log(error));

    return () => {
      cancel = true;
    };
  }, [service, offerBatch]);

  if (!service) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Service Page</h1>
      <Service service={service} setOffers={setOffers} />
      <OfferList offers={offers} setOffers={setOffers} />
      <Pagination
        setPage={setOffers}
        setPageBatch={setOfferBatch}
        enablePrevious={enablePrevious}
        setEnablePrevious={setEnablePrevious}
        enableNext={enableNext}
        setEnableNext={setEnableNext}
      />
    </div>
  );
}
