import React, { useEffect, useState } from "react";
import { findTaskApplications } from "../api/application";

export default function ApplicationList({ task }) {
  const [applications, setApplications] = useState();

  useEffect(() => {
    findTaskApplications(task)
      .then((response) => setApplications(response.data))
      .catch((error) => console.log(error));
  }, []);

  function renderApplications() {
    return applications.map((application) => {
      return (
        <div key={application._id}>
          <span>{`Employee: ${application.employee.username}`}</span> <br />
          <span>{`Message: ${application.message}`}</span> <br />
          <span>{`Date: ${new Date(application.date).toUTCString()}`}</span>{" "}
          <br />
          <span>{`Accepted: ${application.accepted}`}</span> <br /> <br />
        </div>
      );
    });
  }

  if (!applications) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>ApplicationList</h2>
      {renderApplications()}
    </div>
  );
}
