import axios from "axios";

/**
 *
 * @param {object} body {}
 * @returns
 */
export async function createSchedule(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/schedule`, body, {
    withCredentials: true,
  });
}

/**
 * @description if both from and to are empty string ("") finds all schedule of the user
 * @param {int} batchLimit number of documents to return
 * @param {int} batchNum nth batch of (batchLimit) documents to return
 * @param {string} from minimum date to search for schedule
 * @param {string} to maximum date
 * @returns axios Promise
 */
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

/**
 *
 * @param {string} scheduleId Schedule._id
 * @returns axios Promise
 */
export async function deleteSchedule(scheduleId) {
  return axios.delete(
    `${process.env.REACT_APP_API_HOST}/api/schedule/${scheduleId}`,
    {
      withCredentials: true,
    }
  );
}
