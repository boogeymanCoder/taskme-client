import axios from "axios";

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
