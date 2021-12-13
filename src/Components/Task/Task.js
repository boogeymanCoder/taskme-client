import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  countAcceptedApplication,
  deleteTaskApplications,
} from "../../api/application";
import { deleteTask, toggleOpenTask, upToggleTask } from "../../api/task";
import TaskView from "../../views/Task/TaskView";

export default function Task({ taskData, setTasks }) {
  const account = useSelector((state) => state.accountLog.account);
  const [task, setTask] = useState(taskData);
  const navigate = useNavigate();

  useEffect(() => {
    for (var property in task) {
      taskData[property] = task[property];
    }
  }, [task, taskData]);

  function handleUp(e) {
    e.target.disabled = true;
    upToggleTask(task._id, account._id)
      .then((response) => {
        setTask(response.data);
        e.target.disabled = false;
      })
      .catch((error) => console.log("Up Failed"));
  }

  function handleOpen(e) {
    toggleOpenTask(task._id, !task.open)
      .then((response) => setTask(response.data))
      .catch((error) => console.log(error));
  }

  function handleDelete(e) {
    console.log("delete");
    countAcceptedApplication(task._id)
      .then((response) => {
        console.log("response to delete:", response);
        if (response.data > 0) {
          console.log("has accepted");
          return alert("Cannot Delete Task with Accepted Applications");
        }
        console.log("no accepted");
        if (!window.confirm("This action cannot be undone, are you sure?"))
          return;
        deleteTask(task._id)
          .then((response) => {
            if (setTasks) {
              setTasks((lastState) => {
                var updatedTasks = [...lastState];
                console.log(updatedTasks.indexOf(taskData));
                updatedTasks.splice(updatedTasks.indexOf(taskData), 1);
                return updatedTasks;
              });

              deleteTaskApplications(task._id)
                .then((response) => {
                  console.log("Deleted Applications");
                  navigate("/");
                })
                .catch((error) => console.log(error));
            }
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }

  return (
    <TaskView
      task={task}
      account={account}
      handleUp={handleUp}
      handleDelete={handleDelete}
      handleOpen={handleOpen}
    />
  );
}
