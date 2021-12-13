import React from "react";
import NewTask from "../../Components/Task/NewTask";
import TaskList from "../../Components/Task/TaskList";

export default function MainView({ pagination, tasks, setTasks }) {
  return (
    <div>
      <h1>New Task</h1>
      <NewTask tasks={tasks} setTasks={setTasks} />
      <br />
      <h2>Task List</h2>
      <TaskList taskList={tasks} />
      {pagination}
    </div>
  );
}
