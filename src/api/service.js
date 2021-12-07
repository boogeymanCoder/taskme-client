import axios from "axios";

/**
 *
 * @param {object} body {currency: string, details: string, name: string, owner: Account._id, price: number, tags: [string]}
 * @returns axios Promise
 */
export async function createService(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/service/`, body, {
    withCredentials: true,
  });
}

/**
 *
 * @param {string} serviceId Service._id
 * @param {object} body {?currency: string, ?details: string, ?name: string, ?owner: Account._id, ?price: number, ?tags: [string]}
 * @returns axios Promise
 */
export async function updateService(serviceId, body) {
  return axios.patch(
    `${process.env.REACT_APP_API_HOST}/api/service/${serviceId}`,
    body,
    {
      withCredentials: true,
    }
  );
}

/**
 *
 * @param {int} batchLimit number of documents to return per batch
 * @param {int} batchNum nth batch of (batchLimit) documents
 * @returns axios Promise
 */
export async function findServiceBatch(batchLimit, batchNum) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/service/batch/${batchLimit}/${batchNum}`,
    { withCredentials: true }
  );
}

/**
 *
 * @param {int} batchLimit number of documents to return per
 * @param {int} batchNum nth batch o (batchLimit) documents
 * @param {string} userId Account._id
 * @returns axios Promise
 */
export async function findUserServiceBatch(batchLimit, batchNum, userId) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/service/batch/${batchLimit}/${batchNum}/owner/${userId}`,
    { withCredentials: true }
  );
}

/**
 *
 * @param {string} serviceId Service._id
 * @returns axios Promise
 */
export async function findService(serviceId) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/service/${serviceId}`,
    {
      withCredentials: true,
    }
  );
}

/**
 *
 * @param {string} serviceId Service._id
 * @returns axios Promise
 */
export async function deleteService(serviceId) {
  return axios.delete(
    `${process.env.REACT_APP_API_HOST}/api/service/${serviceId}`,
    {
      withCredentials: true,
    }
  );
}
