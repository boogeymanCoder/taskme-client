import React, { useEffect, useState } from "react";
import { findTaskBatch } from "../api/task";
import NewTask from "../Components/NewTask";
import TaskList from "../Components/TaskList";
import { useAuthCheck } from "../hooks/auth";

export default function Main() {
  const [taskBatch, setTaskBatch] = useState(1);
  const [tasks, setTasks] = useState();

  useAuthCheck("/login");

  useEffect(() => {
    findTaskBatch(20, taskBatch).then((response) => {
      console.log("taskList:", response.data);
      setTasks(response.data);
    });

    return () => setTasks(null);
  }, [taskBatch]);

  useEffect(() => {
    console.log("tasks changed");
  }, [tasks]);

  return (
    <>
      <h2>New Task</h2>
      <NewTask tasks={tasks} setTasks={setTasks} />
      <br />
      <TaskList taskList={tasks} />
    </>
  );
}
