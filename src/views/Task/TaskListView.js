import React from "react";
import Task from "../../Components/Task/Task";

export default function TaskListView({ tasks, setTasks }) {
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-8">
        {tasks.map((task, index) => {
          console.log(task);
          return (
            <div key={task._id}>
              <Task taskData={task} setTasks={setTasks} />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
