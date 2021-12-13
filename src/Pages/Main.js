import React, { useEffect, useState } from "react";
import { findTaskBatch } from "../api/task";
import Pagination from "../Components/Pagination";
import { useAuthCheck } from "../hooks/auth";
import MainView from "../views/Pages/MainView";

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

      if (response.data.length === 20) setEnableNext(true);
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
    <MainView
      pagination={
        <Pagination
          setPage={setTasks}
          setPageBatch={setTaskBatch}
          enablePrevious={enablePrevious}
          setEnablePrevious={setEnablePrevious}
          enableNext={enableNext}
          setEnableNext={setEnableNext}
        />
      }
      tasks={tasks}
      setTasks={setTasks}
    />
  );
}
