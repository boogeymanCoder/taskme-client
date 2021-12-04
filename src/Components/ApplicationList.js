import React from "react";
import Application from "./Application";

export default function ApplicationList({
  task,
  applications,
  setApplications,
}) {
  console.log("ApplicationList Applications:", applications);
  function renderApplications() {
    if (applications.length < 1) return <span>No applications</span>;
    return applications.map((application) => {
      return (
        <Application
          key={application._id}
          task={task}
          applicationData={application}
          setApplications={setApplications}
        />
      );
    });
  }

  console.log(applications);

  if (!applications) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>ApplicationList</h2>
      {renderApplications()}
    </div>
  );
}
