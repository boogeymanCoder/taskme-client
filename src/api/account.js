import axios from "axios";

export async function findAccountByUsername(username) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/account/username/${username}`,
    { withCredentials: true }
  );
}
