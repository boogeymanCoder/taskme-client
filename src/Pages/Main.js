import React, { useEffect, useState } from "react";
import { findTaskBatch } from "../api/task";
import NewTask from "../Components/NewTask";
import TaskList from "../Components/TaskList";
import { useAuthCheck } from "../hooks/auth";

export default function Main() {
  const [taskBatch, setTaskBatch] = useState(1);
  const [tasks, setTasks] = useState();
  const [enableNext, setEnableNext] = useState(false);
  const [enablePrevious, setEnablePrevious] = useState(false);

  useAuthCheck("/login");

  useEffect(() => {
    var cancel = false;
    findTaskBatch(20, taskBatch).then((response) => {
      if (cancel) return;
      console.log("taskList:", response.data);
      setTasks(response.data);

      if (response.data.length > 0) setEnableNext(true);
      else setEnableNext(false);

      if (taskBatch <= 1) setEnablePrevious(false);
      else setEnablePrevious(true);
    });

    return () => {
      cancel = true;
    };
  }, [taskBatch]);

  useEffect(() => {
    console.log("tasks changed");
  }, [tasks]);

  return (
    <>
      <h2>New Task</h2>
      <NewTask tasks={tasks} setTasks={setTasks} />
      <br />
      <TaskList taskList={tasks} />
      <input
        type="button"
        value="Previous"
        onClick={(e) => {
          setTaskBatch((lastState) =>
            lastState > 1 ? lastState - 1 : lastState
          );
          setTasks();
          setEnableNext(false);
          setEnablePrevious(false);
        }}
        disabled={!enablePrevious}
      />
      <input
        type="button"
        value="Next"
        onClick={(e) => {
          setTaskBatch((lastState) => lastState + 1);
          setTasks();
          setEnableNext(false);
          setEnablePrevious(false);
        }}
        disabled={!enableNext}
      />
    </>
  );
}
