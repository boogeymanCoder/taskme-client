import axios from "axios";

/**
 *
 * @param {object} body {accepted: boolean, date: Date, employee: Employee._id, message: string, task: Task._id}
 * @returns axios Promise
 */
export async function createApplication(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/application`, body, {
    withCredentials: true,
  });
}

/**
 *
 * @param {string} taskId Task._id
 * @returns axios Promise
 */
export async function findTaskApplications(taskId) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/application/task/${taskId}`,
    { withCredentials: true }
  );
}

/**
 *
 * @param {int} batchLimit how many documents to return
 * @param {int} batchNum nth batch of (batchLimit) documents
 * @param {string} taskId Task._id
 * @returns axios Promise
 */
export async function findTaskApplicationsBatch(batchLimit, batchNum, taskId) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/application/batch/${batchLimit}/${batchNum}/${taskId}`,
    { withCredentials: true }
  );
}

/**
 *
 * @param {string} applicationId Application._id
 * @param {string} message message to replace existing message
 * @returns axios Promise
 */
export async function editApplicationMessage(applicationId, message) {
  return axios.patch(
    `${process.env.REACT_APP_API_HOST}/api/application/${applicationId}`,
    { message: message, date: new Date() },
    { withCredentials: true }
  );
}

/**
 *
 * @param {string} applicationId Application._id
 * @param {boolean} accepted wether the application is accepted
 * @returns axios Promise
 */
export async function toggleAcceptApplication(applicationId, accepted) {
  console.log("accepted:", accepted);
  return axios.patch(
    `${process.env.REACT_APP_API_HOST}/api/application/${applicationId}`,
    { accepted: accepted },
    { withCredentials: true }
  );
}

/**
 *
 * @param {string} applicationId Application._id
 * @returns axios Promise
 */
export async function deleteApplication(applicationId) {
  return axios.delete(
    `${process.env.REACT_APP_API_HOST}/api/application/${applicationId}`
  );
}
