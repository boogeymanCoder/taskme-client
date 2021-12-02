import React, { useEffect, useState } from "react";
import { findServiceBatch } from "../api/service";
import NewService from "../Components/NewService";
import ServiceList from "../Components/ServiceList";

export default function ServicePage() {
  const [serviceBatch, setServiceBatch] = useState(1);
  const [services, setServices] = useState();

  useEffect(() => {
    findServiceBatch(20, serviceBatch)
      .then((response) => setServices(response.data))
      .catch((error) => console.log(error));
  }, [serviceBatch]);

  return (
    <div>
      <h1>Service</h1>
      <NewService services={services} setServices={setServices} />
      <ServiceList services={services} />
    </div>
  );
}
