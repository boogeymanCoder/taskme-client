import axios from "axios";

export function createTask(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/task`, body, {
    withCredentials: true,
  });
}
