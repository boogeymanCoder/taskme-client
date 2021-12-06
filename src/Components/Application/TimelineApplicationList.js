import React from "react";
import TimelineApplication from "./TimelineApplication";

export default function TimelineApplicationList({ applications }) {
  if (!applications) return <h2>Loading...</h2>;
  else if (applications.length < 1) return <h2>No Applications Found</h2>;

  return (
    <>
      {applications.map((application) => {
        return (
          <div key={application._id}>
            <TimelineApplication application={application} />
            <br />
          </div>
        );
      })}
    </>
  );
}
