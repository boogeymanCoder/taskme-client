import React from "react";
import NewService from "../../Components/Service/NewService";
import ServiceList from "../../Components/Service/ServiceList";

export default function ServicesPageView({
  pagination,
  services,
  setServices,
}) {
  return (
    <div>
      <h1>Service</h1>
      <NewService services={services} setServices={setServices} />
      <ServiceList services={services} />
      {pagination}
    </div>
  );
}
