import axios from "axios";

/**
 *
 * @param {string} owner Account._id
 * @returns axios Promise
 */
export async function getNotificationByOwner(owner) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/notification/owner/${owner}`
  );
}

/**
 *
 * @param {string} notificationId Notification._id
 * @param {string} conversationId Conversation._id
 * @returns axios Promise
 */
export async function notificationRemoveConversation(
  notificationId,
  conversationId
) {
  return axios.delete(
    `${process.env.REACT_APP_API_HOST}/api/notification/${notificationId}/conversations/${conversationId}`,
    { withCredentials: true }
  );
}
