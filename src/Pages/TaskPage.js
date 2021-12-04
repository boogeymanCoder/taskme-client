import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { findTaskApplications } from "../api/application";
import { findTask } from "../api/task";
import ApplicationList from "../Components/ApplicationList";
import NewApplication from "../Components/NewApplication";
import Task from "../Components/Task";
import { devLog } from "../dev/log";
import { useAuthCheck } from "../hooks/auth";

export default function TaskPage() {
  const { taskId } = useParams();
  const [task, setTask] = useState();
  const [applications, setApplications] = useState();

  useAuthCheck("/login");

  useEffect(() => {
    if (!task) return;
    devLog(task);
    findTaskApplications(task._id)
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        if (error.response.status === 404) setApplications([]);
        devLog(error);
      });
  }, [task]);

  useEffect(() => {
    findTask(taskId)
      .then((response) => {
        setTask(response.data);
      })
      .catch((error) => devLog(error));
  }, [taskId]);

  if (!task) return <h2>Loading...</h2>;

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
    </div>
  );
}
