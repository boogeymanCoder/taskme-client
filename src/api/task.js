import axios from "axios";

/**
 *
 * @param {object} body {currency: string, date: Date, details: string, employer: Account._id, location: sting, name: string, open: boolean, price: number, skill: string, tags[string]}
 * @returns axios Promise
 */
export async function createTask(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/task`, body, {
    withCredentials: true,
  });
}

/**
 *
 * @param {int} batchLimit number of documents to return
 * @param {int} batchNum nth batch of (batchLimit) documents
 * @returns axios Promise
 */
export async function findTaskBatch(batchLimit, batchNum) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/task/batch/${batchLimit}/${batchNum}`,
    { withCredentials: true }
  );
}

/**
 *
 * @param {int} batchLimit number of documents to return
 * @param {int} batchNum nth batch of (batchLimit) documents
 * @param {string} userId Account._id
 * @returns axios Promise
 */
export async function findUserTaskBatch(batchLimit, batchNum, userId) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/task/batch/${batchLimit}/${batchNum}/${userId}`,
    { withCredentials: true }
  );
}

/**
 *
 * @param {string} taskId Task._id
 * @returns axios Promise
 */
export async function findTask(taskId) {
  return axios.get(`${process.env.REACT_APP_API_HOST}/api/task/id/${taskId}`, {
    withCredentials: true,
  });
}

/**
 *
 * @param {string} taskId Task._id
 * @param {sting} userId Account._id
 * @returns axios Promise
 */
export async function upToggleTask(taskId, userId) {
  return axios.put(
    `${process.env.REACT_APP_API_HOST}/api/task/${taskId}/up/${userId}`,
    { withCredentials: true }
  );
}

/**
 *
 * @param {string} taskId Task._id
 * @param {boolean} open wether the task was open for applications
 * @returns axios Promise
 */
export async function toggleOpenTask(task, open) {
  console.log("open:", open);
  return axios.patch(
    `${process.env.REACT_APP_API_HOST}/api/task/${task}`,
    { open: open },
    { withCredentials: true }
  );
}
