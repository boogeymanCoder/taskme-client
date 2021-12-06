import React, { useEffect, useState } from "react";
import Task from "./Task";

export default function TaskList({ taskList }) {
  const [tasks, setTasks] = useState(taskList);

  useEffect(() => {
    console.log("rerendered:", taskList);
    setTasks(taskList);
  }, [taskList]);

  if (!tasks) return <h2>Loading...</h2>;
  else if (tasks.length < 1) return <h2>No Tasks Found</h2>;

  return (
    <>
      {tasks.map((task, index) => {
        console.log(task);
        return (
          <div key={task._id}>
            <Task taskData={task} setTasks={setTasks} />
            <br />
          </div>
        );
      })}
    </>
  );
}
