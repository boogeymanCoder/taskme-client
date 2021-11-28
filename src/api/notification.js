import axios from "axios";

export async function getNotificationByOwner(owner) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/notification/owner/${owner}`
  );
}

export async function notificationRemoveConversation(
  notification,
  conversation
) {
  return axios.delete(
    `${process.env.REACT_APP_API_HOST}/api/notification/${notification}/conversations/${conversation}`,
    { withCredentials: true }
  );
}
