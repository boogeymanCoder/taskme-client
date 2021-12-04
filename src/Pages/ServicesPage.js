import React, { useEffect, useState } from "react";
import { findServiceBatch } from "../api/service";
import NewService from "../Components/NewService";
import Pagination from "../Components/Pagination";
import ServiceList from "../Components/ServiceList";
import { useAuthCheck } from "../hooks/auth";

export default function ServicesPage() {
  const [serviceBatch, setServiceBatch] = useState(1);
  const [services, setServices] = useState();
  const [enablePrevious, setEnablePrevious] = useState(false);
  const [enableNext, setEnableNext] = useState(false);

  useAuthCheck("/login");

  useEffect(() => {
    var cancel = false;
    findServiceBatch(20, serviceBatch)
      .then((response) => {
        if (cancel) return;
        setServices(response.data);

        if (response.data.length === 20) setEnableNext(true);
        else setEnableNext(false);

        if (serviceBatch <= 1) setEnablePrevious(false);
        else setEnablePrevious(true);
      })
      .catch((error) => console.log(error));

    return () => {
      cancel = true;
    };
  }, [serviceBatch]);

  return (
    <div>
      <h1>Service</h1>
      <NewService services={services} setServices={setServices} />
      <ServiceList services={services} />
      <Pagination
        setPage={setServices}
        setPageBatch={setServiceBatch}
        enablePrevious={enablePrevious}
        setEnablePrevious={setEnablePrevious}
        enableNext={enableNext}
        setEnableNext={setEnableNext}
      />
    </div>
  );
}
