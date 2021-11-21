import axios from "axios";

export async function createConversation(body) {
  return axios.post(
    `${process.env.REACT_APP_API_HOST}/api/conversation`,
    body,
    { withCredentials: true }
  );
}
