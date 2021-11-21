import axios from "axios";

export function createMessage(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/message`, body, {
    withCredentials: true,
  });
}
