import axios from "axios";
import { devLog } from "../dev/log";

export async function findAccountByUsername(username) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/account/username/${username}`,
    { withCredentials: true }
  );
}

export async function findAccountById(id) {
  devLog("api caller received:", id);
  return axios.get(`${process.env.REACT_APP_API_HOST}/api/account/id/${id}`, {
    withCredentials: true,
  });
}
