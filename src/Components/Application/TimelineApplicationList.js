import React from "react";
import TimelineApplicationListView from "../../views/Application/TimelineApplicationListView";

export default function TimelineApplicationList({ applications }) {
  if (!applications) return <h2>Loading...</h2>;
  else if (applications.length < 1) return <h2>No Applications Found</h2>;

  return <TimelineApplicationListView applications={applications} />;
}
