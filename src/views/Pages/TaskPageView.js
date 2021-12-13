import React from "react";
import ApplicationList from "../../Components/Application/ApplicationList";
import NewApplication from "../../Components/Application/NewApplication";
import Task from "../../Components/Task/Task";

export default function TaskPageView({
  task,
  applications,
  setApplications,
  pagination,
}) {
  return (
    <div>
      <Task taskData={task} />
      <NewApplication
        task={task}
        applications={applications}
        setApplications={setApplications}
      />
      <ApplicationList
        task={task}
        applications={applications}
        setApplications={setApplications}
      />
      {pagination}
    </div>
  );
}
