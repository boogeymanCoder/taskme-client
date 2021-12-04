import axios from "axios";
import { devLog } from "../dev/log";

export async function createConversation(body) {
  return axios.post(
    `${process.env.REACT_APP_API_HOST}/api/conversation`,
    body,
    { withCredentials: true }
  );
}

export async function findConversation(conversationId) {
  return axios.get(
    `${process.env.REACT_APP_API_HOST}/api/conversation/id/${conversationId}`,
    { withCredentials: true }
  );
}

export async function addConversationMember(conversation, member) {
  return axios.put(
    `${process.env.REACT_APP_API_HOST}/api/conversation/${conversation}/members`,
    { member: member },
    { withCredentials: true }
  );
}

export async function deleteConversationMember(conversation, member) {
  devLog(member);
  return axios.patch(
    `${process.env.REACT_APP_API_HOST}/api/conversation/${conversation}/members`,
    { member: member },
    { withCredentials: true }
  );
}
