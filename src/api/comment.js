import axios from "axios";

/**
 *
 * @param {object} body {body: string, date: Date, owner: Account._id, replies: [Comment], ups:[Account._id]}
 * @returns axios Promise
 */
export async function createComment(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/comment`, body, {
    withCredentials: true,
  });
}

/**
 *
 * @param {string} commentId Comment._id
 * @returns
 */
export async function findComment(commentId) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/comment/${commentId}`,
    {
      withCredentials: true,
    }
  );
}
