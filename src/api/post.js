import axios from "axios";

/**
 *
 * @param {object} body {body: string, comments: [Comment._id], date: Date, owner: Account._id, tags: [string], title: string, ups: [Account._id]}
 * @returns axios Promise
 */
export async function createPost(body) {
  return axios.post(`${process.env.REACT_APP_API_HOST}/api/post`, body, {
    withCredentials: true,
  });
}

/**
 *
 * @param {int} batchLimit number of documents to return per
 * @param {int} batchNum nth batch o (batchLimit) documents
 * @returns axios Promise
 */
export async function findPostBatch(batchLimit, batchNum) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/post/batch/${batchLimit}/${batchNum}`,
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
export async function findUserPostBatch(batchLimit, batchNum, userId) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/post/batch/${batchLimit}/${batchNum}/owner/${userId}`,
    { withCredentials: true }
  );
}

/**
 *
 * @param {string} taskId Task._id
 * @param {string} userId Account._id
 * @returns
 */
export async function upTogglePost(taskId, userId) {
  return axios.put(
    `${process.env.REACT_APP_API_HOST}/api/post/${taskId}/up/${userId}`,
    { withCredentials: true }
  );
}

/**
 *
 * @param {string} postId Post._id
 * @returns axios Promise
 */
export async function findPost(postId) {
  return axios.get(`${process.env.REACT_APP_API_HOST}/api/post/${postId}`, {
    withCredentials: true,
  });
}

/**
 *
 * @param {string} id Account._id
 * @param {string} commentId Comment._id
 * @returns axios Promise
 */
export async function addPostComment(id, comment) {
  console.log("api caller received: ", comment);
  return axios.put(
    `${process.env.REACT_APP_API_HOST}/api/post/${id}/comments`,
    { comment: comment },
    { withCredentials: true }
  );
}
