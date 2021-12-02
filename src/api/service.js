import axios from "axios";

export async function createService(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/service/`, body, {
    withCredentials: true,
  });
}

export async function findServiceBatch(batchLimit, batchNum) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/service/batch/${batchLimit}/${batchNum}`,
    { withCredentials: true }
  );
}
