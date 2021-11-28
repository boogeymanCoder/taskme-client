import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { findTask } from "../api/task";
import ApplicationList from "../Components/ApplicationList";
import NewApplication from "../Components/NewApplication";
import Task from "../Components/Task";

export default function TaskPage() {
  const { taskId } = useParams();
  const [task, setTask] = useState();

  useEffect(() => {
    findTask(taskId)
      .then((response) => {
        setTask(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!task) return <h2>Loading...</h2>;

  return (
    <div>
      <Task taskData={task} />
      <NewApplication task={task} />
      <ApplicationList task={task._id} />
    </div>
  );
}
