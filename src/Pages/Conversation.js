import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import MessageInput from "../Components/MessageInput";
import { useAuthCheck } from "../hooks/auth";
import { findConversation } from "../api/conversation";
import { devLog } from "../dev/log";

export default function Conversation() {
  const { conversationId } = useParams();
  const [conversation, setConversation] = useState(null);

  useAuthCheck("/login");

  useEffect(() => {
    devLog("getConversation called");
    findConversation(conversationId)
      .then((res) => {
        setConversation(res.data);
      })
      .catch((err) => devLog(err));
  }, [conversationId]);

  function renderConversation() {
    if (conversation) {
      return conversation.messages.map((message) => {
        const sender = conversation.members.find(
          (member) => member._id === message.sender
        );
        return (
          <p key={message._id}>
            <Link to={`/profile/${sender._id}`}>{sender.username}</Link>:{" "}
            {message.message}
          </p>
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
