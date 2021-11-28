import axios from "axios";

export async function createApplication(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/application`, body, {
    withCredentials: true,
  });
}

export async function findTaskApplications(task) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/application/task/${task}`,
    { withCredentials: true }
  );
}
