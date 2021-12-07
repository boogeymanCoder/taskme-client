import axios from "axios";

/**
 *
 * @param {object} body {date: Date, receiver: Account._id, sender: Account._id, service: Service._id, task._id}
 * @returns axios Promise
 */
export async function createOffer(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/offer`, body, {
    withCredentials: true,
  });
}

/**
 *
 * @param {string} serviceId Service._id
 * @returns axios Promise
 */
export async function findServiceOffers(serviceId) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/offer/service/${serviceId}`,
    {
      withCredentials: true,
    }
  );
}

/**
 *
 * @param {int} batchLimit number of documents to return
 * @param {int} batchNum nth batch of (batchLimit) documents
 * @param {string} serviceId Service._id
 * @returns axios Promise
 */
export async function findServiceOffersBatch(batchLimit, batchNum, serviceId) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/offer/batch/${batchLimit}/${batchNum}/${serviceId}`,
    { withCredentials: true }
  );
}

/**
 *
 * @param {string} offerId Offer._id
 * @returns axios Promise
 */
export async function findOffer(offerId) {
  return axios.get(`${process.env.REACT_APP_API_HOST}/api/offer/${offerId}`, {
    withCredentials: true,
  });
}

/**
 *
 * @param {string} offerId Offer._id
 * @returns axios Promise
 */
export async function deleteOffer(offerId) {
  return axios.delete(
    `${process.env.REACT_APP_API_HOST}/api/offer/${offerId}`,
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
export async function deleteServiceOffers(serviceId) {
  return axios.delete(
    `${process.env.REACT_APP_API_HOST}/api/offer/service/${serviceId}`,
    {
      withCredentials: true,
    }
  );
}
