import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { findTaskApplicationsBatch } from "../api/application";
import { findTask } from "../api/task";
import ApplicationList from "../Components/ApplicationList";
import NewApplication from "../Components/NewApplication";
import Pagination from "../Components/Pagination";
import Task from "../Components/Task";
import { useAuthCheck } from "../hooks/auth";

export default function TaskPage() {
  const { taskId } = useParams();
  const [task, setTask] = useState();
  const [applications, setApplications] = useState();
  const [applicationBatch, setApplicationBatch] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  const [enablePrevious, setEnablePrevious] = useState(false);

  useAuthCheck("/login");

  useEffect(() => {
    var cancel = false;
    findTask(taskId)
      .then((response) => {
        if (cancel) return;
        setTask(response.data);
      })
      .catch((error) => console.log(error));

    return () => {
      cancel = true;
    };
  }, [taskId]);

  useEffect(() => {
    if (!task) return;
    console.log(task);
    var cancel = false;
    findTaskApplicationsBatch(20, applicationBatch, task._id)
      .then((response) => {
        if (cancel) return;
        setApplications(response.data);

        if (response.data.length === 20) setEnableNext(true);
        else setEnableNext(false);

        if (applicationBatch <= 1) setEnablePrevious(false);
        else setEnablePrevious(true);
      })
      .catch((error) => {
        if (error.response.status === 404) setApplications([]);
        console.log(error);
      });

    return () => {
      cancel = true;
    };
  }, [task, applicationBatch]);

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
      <Pagination
        setPage={setApplications}
        setPageBatch={setApplicationBatch}
        enablePrevious={enablePrevious}
        setEnablePrevious={setEnablePrevious}
        enableNext={enableNext}
        setEnableNext={setEnableNext}
      />
    </div>
  );
}
