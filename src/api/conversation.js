import axios from "axios";

/**
 *
 * @param {object} body {members: [Account._id], messages: [Message._id], name: string}
 * @returns axios Promise
 */
export async function createConversation(body) {
  return axios.post(
    `${process.env.REACT_APP_API_HOST}/api/conversation`,
    body,
    { withCredentials: true }
  );
}

/**
 *
 * @param {string} conversationId Conversation._id
 * @returns axios Promise
 */
export async function findConversation(conversationId) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/conversation/id/${conversationId}`,
    { withCredentials: true }
  );
}

/**
 * put request to api that adds a member to a conversation
 * @param {string} conversationId Conversation._id
 * @param {object} member Account
 * @returns axios Promise
 */
export async function addConversationMember(conversationId, member) {
  return axios.put(
    `${process.env.REACT_APP_API_HOST}/api/conversation/${conversationId}/members`,
    { member: member },
    { withCredentials: true }
  );
}

/**
 * patch request to api that removes a member to a conversation
 * @param {string} conversationId Conversation._id
 * @param {object} member Account
 * @returns axios Promise
 */
export async function deleteConversationMember(conversationId, member) {
  console.log(member);
  return axios.patch(
    `${process.env.REACT_APP_API_HOST}/api/conversation/${conversationId}/members`,
    { member: member },
    { withCredentials: true }
  );
}
