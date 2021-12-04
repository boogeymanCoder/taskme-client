import axios from "axios";

export async function createSchedule(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/schedule`, body, {
    withCredentials: true,
  });
}

export async function findScheduleBatch(batchLimit, batchNum, from, to) {
  console.log(
    "schedule link:",
    `${
      process.env.REACT_APP_API_HOST
    }/api/schedule/batch/${batchLimit}/${batchNum}/${
      from === "" ? undefined : from
    }/${to === "" ? undefined : to}`
  );
  return axios.get(
    `${
      process.env.REACT_APP_API_HOST
    }/api/schedule/batch/${batchLimit}/${batchNum}/${
      from === "" ? undefined : from
    }/${to === "" ? undefined : to}`,
    {
      withCredentials: true,
    }
  );
}

export async function deleteSchedule(scheduleId) {
  return axios.delete(
    `${process.env.REACT_APP_API_HOST}/api/schedule/${scheduleId}`,
    {
      withCredentials: true,
    }
  );
}
