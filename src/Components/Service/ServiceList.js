import React from "react";
import ServiceListView from "../../views/Service/ServiceListView";
import Service from "./Service";

export default function ServiceList({ services }) {
  console.log(services);
  function renderList() {
    if (!services) return <h3>Loading...</h3>;
    else if (services.length < 1) return <h3>No Services Found</h3>;

    return services.map((service) => {
      return (
        <span key={service._id}>
          <Service service={service} />
          <br />
        </span>
      );
    });
  }

  return <ServiceListView renderList={renderList} />;
}
