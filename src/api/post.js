import axios from "axios";
import { devLog } from "../dev/log";

export async function createPost(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/post`, body, {
    withCredentials: true,
  });
}

export async function findPostBatch(batchLimit, batchNum) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/post/batch/${batchLimit}/${batchNum}`,
    { withCredentials: true }
  );
}

export async function upTogglePost(task, user) {
  return axios.put(
    `${process.env.REACT_APP_API_HOST}/api/post/${task}/up/${user}`,
    { withCredentials: true }
  );
}

export async function findPost(post) {
  return axios.get(`${process.env.REACT_APP_API_HOST}/api/post/${post}`, {
    withCredentials: true,
  });
}

export async function addPostComment(id, comment) {
  devLog("api caller received: ", comment);
  return axios.put(
    `${process.env.REACT_APP_API_HOST}/api/post/${id}/comments`,
    { comment: comment },
    { withCredentials: true }
  );
}
