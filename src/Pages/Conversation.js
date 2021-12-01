import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import MessageInput from "../Components/MessageInput";
import { useAuthCheck } from "../hooks/auth";

export default function Conversation() {
  const account = useSelector((state) => state.accountLog.account);
  const { conversationId } = useParams();
  const [conversation, setConversation] = useState(null);

  useAuthCheck("/login");

  async function getConversation() {
    return axios.get(
      `${process.env.REACT_APP_API_HOST}/api/conversation/id/${conversationId}`,
      { withCredentials: true }
    );
  }

  useEffect(() => {
    console.log("getConversation called");
    getConversation()
      .then((res) => {
        setConversation(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function renderConversation() {
    if (conversation) {
      return conversation.messages.map((message) => {
        const sender = conversation.members.find(
          (member) => member._id == message.sender
        );
        return (
          <p key={message._id}>{`${sender.username}: ${message.message}`}</p>
        );
      });
    }
  }

  return (
    <>
      <div>Conversation</div>
      {renderConversation()}
      <MessageInput
        conversation={conversation}
        setConversation={setConversation}
      />
    </>
  );
}
