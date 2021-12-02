import React from "react";
import Service from "./Service";

export default function ServiceList({ services }) {
  function renderList() {
    if (!services) return <h3>Loading...</h3>;

    return services.map((service) => {
      return (
        <span key={service._id}>
          <Service service={service} />
          <br />
        </span>
      );
    });
  }

  return (
    <div>
      <h2>Service List</h2>
      {renderList()}
    </div>
  );
}
