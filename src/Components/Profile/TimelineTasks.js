import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { findUserTaskBatch } from "../../api/task";
import Pagination from "../Pagination";
import TaskList from "../Task/TaskList";

export default function TimelineTasks() {
  const account = useSelector((state) => state.accountLog.account);
  const [tasks, setTasks] = useState();
  const [taskBatch, setTaskBatch] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  const [enablePrevious, setEnablePrevious] = useState(false);

  useEffect(() => {
    var cancel = false;

    findUserTaskBatch(20, taskBatch, account._id)
      .then((response) => {
        if (cancel) return;
        setTasks((lastState) => {
          const updatedTasks = response.data;

          if (response.data.length === 20) setEnableNext(true);
          else setEnableNext(false);

          if (taskBatch <= 1) setEnablePrevious(false);
          else setEnablePrevious(true);

          return updatedTasks;
        });
      })
      .catch((error) => console.log(error));

    return () => {
      cancel = true;
    };
  }, [taskBatch, account]);

  return (
    <span>
      <TaskList taskList={tasks} />
      <Pagination
        setPageBatch={setTaskBatch}
        setPage={setTasks}
        enableNext={enableNext}
        setEnableNext={setEnableNext}
        enablePrevious={enablePrevious}
        setEnablePrevious={setEnablePrevious}
      />
    </span>
  );
}
