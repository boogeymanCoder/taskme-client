import axios from "axios";

export async function createSchedule(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/schedule`, body, {
    withCredentials: true,
  });
}

export async function findScheduleBatch(batchLimit, batchNum, date) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/schedule/batch/${batchLimit}/${batchNum}/${date}`,
    {
      withCredentials: true,
    }
  );
}
