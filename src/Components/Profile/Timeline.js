import React, { useState } from "react";
import TimelineApplications from "./TimelineApplications";
import TimelinePosts from "./TimelinePosts";
import TimelineServices from "./TimelineServices";
import TimelineTasks from "./TimelineTasks";

export default function Timeline() {
  const [display, setDisplay] = useState("task");
  const timeline = {
    task: "task",
    application: "application",
    post: "post",
    service: "service",
  };

  function renderTimeline() {
    switch (display) {
      case timeline.task:
        return <TimelineTasks />;
      case timeline.application:
        return <TimelineApplications />;
      case timeline.post:
        return <TimelinePosts />;
      case timeline.service:
        return <TimelineServices />;
      default:
        return <h1>Invalid Timeline Selector</h1>;
    }
  }

  return (
    <div>
      <h2>Timeline</h2>
      <select onChange={(e) => setDisplay(e.target.value)}>
        <option value={timeline.task} defaultValue>
          Tasks
        </option>
        <option value={timeline.application}>Applications</option>
        <option value={timeline.post}>Posts</option>
        <option value={timeline.service}>Services</option>
      </select>
      {renderTimeline()}
    </div>
  );
}
