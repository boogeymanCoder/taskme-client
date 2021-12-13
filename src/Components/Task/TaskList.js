import React, { useEffect, useState } from "react";
import TaskListView from "../../views/Task/TaskListView";

export default function TaskList({ taskList }) {
  const [tasks, setTasks] = useState(taskList);

  useEffect(() => {
    console.log("rerendered:", taskList);
    setTasks(taskList);
  }, [taskList]);

  if (!tasks) return <h2>Loading...</h2>;
  else if (tasks.length < 1) return <h2>No Tasks Found</h2>;

  return <TaskListView tasks={tasks} setTasks={setTasks} />;
}
