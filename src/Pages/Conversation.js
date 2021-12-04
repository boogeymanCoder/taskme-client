import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import MessageInput from "../Components/MessageInput";
import { useAuthCheck } from "../hooks/auth";
import { findConversation } from "../api/conversation";

export default function Conversation() {
  const { conversationId } = useParams();
  const [conversation, setConversation] = useState(null);

  useAuthCheck("/login");

  useEffect(() => {
    var cancel = false;
    console.log("getConversation called");
    findConversation(conversationId)
      .then((res) => {
        if (cancel) return;
        setConversation(res.data);
      })
      .catch((err) => console.log(err));

    return () => {
      cancel = true;
    };
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
