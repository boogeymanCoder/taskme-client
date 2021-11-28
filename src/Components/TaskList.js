import React, { useEffect, useState } from "react";
import { findTaskBatch } from "../api/task";
import Task from "./Task";

export default function TaskList() {
  const [taskBatch, setTaskBatch] = useState(1);
  const [tasks, setTasks] = useState();

  useEffect(() => {
    findTaskBatch(20, taskBatch).then((response) => {
      setTasks(response.data);
    });
  }, []);

  if (!tasks) return <h2>Loading...</h2>;

  return (
    <>
      {tasks.map((task, index) => {
        console.log(task);
        return (
          <div key={task._id}>
            <Task taskData={task} />
            <br />
          </div>
        );
      })}
    </>
  );
}
