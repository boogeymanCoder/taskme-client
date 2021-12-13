import React from "react";
import ServiceList from "../../Components/Service/ServiceList";

export default function TimelineServicesView({ services, posts }) {
  return (
    <div>
      <ServiceList services={services} />
      {posts}
    </div>
  );
}
