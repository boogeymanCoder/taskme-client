import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAuthCheck } from "../../hooks/auth";
import TimelineView from "../../views/Profile/TimelineView";
import TimelineApplications from "./TimelineApplications";
import TimelinePosts from "./TimelinePosts";
import TimelineServices from "./TimelineServices";
import TimelineTasks from "./TimelineTasks";

export default function Timeline() {
  const account = useSelector((state) => state.accountLog.account);
  const [display, setDisplay] = useState("task");
  const timeline = {
    task: "task",
    application: "application",
    post: "post",
    service: "service",
  };

  useAuthCheck("/login");

  function renderTimeline() {
    if (!account) return;
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
    <TimelineView
      setDisplay={setDisplay}
      timeline={timeline}
      renderTimeline={renderTimeline}
    />
  );
}
