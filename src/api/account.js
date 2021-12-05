import axios from "axios";

/**
 *
 * @param {string} username account username
 * @returns axios Promise
 */
export async function findAccountByUsername(username) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/account/username/${username}`,
    { withCredentials: true }
  );
}

/**
 *
 * @param {string} id account id
 * @returns axios Promise
 */
export async function findAccountById(id) {
  console.log("api caller received:", id);
  return axios.get(`${process.env.REACT_APP_API_HOST}/api/account/id/${id}`, {
    withCredentials: true,
  });
}
