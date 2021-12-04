import axios from "axios";

export async function createOffer(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/offer`, body, {
    withCredentials: true,
  });
}

export async function findServiceOffers(serviceId) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/offer/service/${serviceId}`,
    {
      withCredentials: true,
    }
  );
}

export async function findServiceOffersBatch(batchLimit, batchNum, service) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/offer/batch/${batchLimit}/${batchNum}/${service}`,
    { withCredentials: true }
  );
}

export async function findOffer(offerId) {
  return axios.get(`${process.env.REACT_APP_API_HOST}/api/offer/${offerId}`, {
    withCredentials: true,
  });
}

export async function deleteOffer(offerId) {
  return axios.delete(
    `${process.env.REACT_APP_API_HOST}/api/offer/${offerId}`,
    {
      withCredentials: true,
    }
  );
}
