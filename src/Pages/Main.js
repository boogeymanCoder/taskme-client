import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createConversation } from "../api/conversation";
import { createMessage } from "../api/message";
import { createTask, findTaskBatch } from "../api/task";
import NewTask from "../Components/NewTask";
import Task from "../Components/Task";
import { useAuthCheck } from "../hooks/auth";

export default function Main() {
  const [taskBatch, setTaskBatch] = useState(1);
  const [tasks, setTasks] = useState([]);

  useAuthCheck("/", "/login");

  useEffect(() => {
    findTaskBatch(20, taskBatch).then((response) => {
      setTasks(response.data);
    });
  }, []);

  function renderTasks() {
    return tasks.map((task, index) => {
      console.log(task);
      return (
        <span key={task._id}>
          <p>{`${index}, ${task._id}`}</p>
          <Task task={task} />
        </span>
      );
    });
  }

  return (
    <>
      <h2>New Task</h2>
      <NewTask tasks={tasks} setTasks={setTasks} />
      {renderTasks()}
    </>
  );
}
