import axios from "axios";

export async function createComment(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/comment`, body, {
    withCredentials: true,
  });
}

export async function findComment(id) {
  return axios.get(`${process.env.REACT_APP_API_HOST}/api/comment/${id}`, {
    withCredentials: true,
  });
}
