import React from "react";
import TimelineApplication from "../../Components/Application/TimelineApplication";

export default function TimelineApplicationListView({ applications }) {
  return (
    <div>
      {applications.map((application) => {
        return (
          <div key={application._id}>
            <TimelineApplication application={application} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
