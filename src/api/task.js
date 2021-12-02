import axios from "axios";

export async function createTask(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/task`, body, {
    withCredentials: true,
  });
}

// TODO find n documents at a time
export async function findTaskBatch(batchLimit, batchNum) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/task/batch/${batchLimit}/${batchNum}`,
    { withCredentials: true }
  );
}

export async function findTask(task) {
  return axios.get(`${process.env.REACT_APP_API_HOST}/api/task/id/${task}`, {
    withCredentials: true,
  });
}

export async function upToggleTask(task, user) {
  return axios.put(
    `${process.env.REACT_APP_API_HOST}/api/task/${task}/up/${user}`,
    { withCredentials: true }
  );
}

export async function toggleOpenTask(task, open) {
  console.log("open:", open);
  return axios.patch(
    `${process.env.REACT_APP_API_HOST}/api/task/${task}`,
    { open: open },
    { withCredentials: true }
  );
}
