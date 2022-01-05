import React from "react";
import NewTask from "../../Components/Task/NewTask";
import TaskList from "../../Components/Task/TaskList";

export default function MainView({ pagination, tasks, setTasks }) {
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-md-8">
        <h1>Home</h1>
        <NewTask tasks={tasks} setTasks={setTasks} />
        <br />
        <h2 className="text-center">Task List</h2>
        <TaskList taskList={tasks} />
        {pagination}
      </div>
    </div>
  );
}
