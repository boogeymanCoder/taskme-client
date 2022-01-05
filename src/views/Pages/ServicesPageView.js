import React from "react";
import NewService from "../../Components/Service/NewService";
import ServiceList from "../../Components/Service/ServiceList";

export default function ServicesPageView({
  pagination,
  services,
  setServices,
}) {
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-md-8">
        <h1>Services</h1>
        <NewService services={services} setServices={setServices} />
        <ServiceList services={services} />
        {pagination}
      </div>
    </div>
  );
}
