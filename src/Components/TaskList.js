import React, { useEffect, useState } from "react";
import { devLog } from "../dev/log";
import Task from "./Task";

export default function TaskList({ taskList }) {
  const [tasks, setTasks] = useState(taskList);

  useEffect(() => {
    devLog("rerendered:", taskList);
    setTasks(taskList);
  }, [taskList]);

  if (!tasks) return <h2>Loading...</h2>;

  return (
    <>
      {tasks.map((task, index) => {
        devLog(task);
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
