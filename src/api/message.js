import axios from "axios";

/**
 *
 * @param {object} body {date: Date, message: string, ?replyTo: Message._id, sender: Account._id}
 * @returns axios Promise
 */
export async function createMessage(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/message`, body, {
    withCredentials: true,
  });
}
