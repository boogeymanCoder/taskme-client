import React from "react";

export default function TaskList() {
  const [taskBatch, setTaskBatch] = useState(1);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    findTaskBatch(20, taskBatch).then((response) => {
      setTasks(response.data);
    });
  }, []);

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

// TODO continue 2021-11-22 21:59:58
