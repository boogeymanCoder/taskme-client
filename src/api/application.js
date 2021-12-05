import axios from "axios";

export async function createApplication(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/application`, body, {
    withCredentials: true,
  });
}

// export async function findUserApplication(task, employee) {
//   return axios.get(`${process.env.REACT_APP_API_HOST}/api/application/${id}`, {
//     withCredentials: true,
//   });
// }

export async function findTaskApplications(task) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/application/task/${task}`,
    { withCredentials: true }
  );
}

export async function findTaskApplicationsBatch(batchLimit, batchNum, taskId) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/application/batch/${batchLimit}/${batchNum}/${taskId}`,
    { withCredentials: true }
  );
}

export async function editApplicationMessage(application, message) {
  return axios.patch(
    `${process.env.REACT_APP_API_HOST}/api/application/${application}`,
    { message: message, date: new Date() },
    { withCredentials: true }
  );
}

export async function toggleAcceptApplication(application, accepted) {
  console.log("accepted:", accepted);
  return axios.patch(
    `${process.env.REACT_APP_API_HOST}/api/application/${application}`,
    { accepted: accepted },
    { withCredentials: true }
  );
}

export async function deleteApplication(application) {
  return axios.delete(
    `${process.env.REACT_APP_API_HOST}/api/application/${application}`
  );
}
