import React from "react";

export default function ApplicationListView({ renderApplications }) {
  return (
    <div>
      <h2>ApplicationList</h2>
      {renderApplications()}
    </div>
  );
}
