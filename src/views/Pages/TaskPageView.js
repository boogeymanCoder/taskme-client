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
    <div className="row justify-content-center pt-5">
      <div className="col-8">
        <Task taskData={task} />
        <NewApplication
          task={task}
          applications={applications}
          setApplications={setApplications}
        />
        <br />
        <ApplicationList
          task={task}
          applications={applications}
          setApplications={setApplications}
        />
        {pagination}
      </div>
    </div>
  );
}
