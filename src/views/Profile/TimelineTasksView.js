import React from "react";
import TaskList from "../../Components/Task/TaskList";

export default function TimelineTasksView({ tasks, pagination }) {
  return (
    <div>
      <TaskList taskList={tasks} />
      {pagination}
    </div>
  );
}
