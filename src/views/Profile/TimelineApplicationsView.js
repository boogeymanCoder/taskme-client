import React from "react";
import TimelineApplicationList from "../../Components/Application/TimelineApplicationList";

export default function TimelineApplicationsView({ pagination, applications }) {
  return (
    <div>
      <TimelineApplicationList applications={applications} />
      {pagination}
    </div>
  );
}
