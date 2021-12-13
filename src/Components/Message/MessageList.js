import React from "react";
import { Link } from "react-router-dom";
import MessageListView from "../../views/Message/MessageListView";

export default function MessageList({ members, messages }) {
  console.log(messages);

  function renderConversation() {
    if (!(members && messages)) return;
    return messages.map((message) => {
      const sender = members.find((member) => member._id === message.sender);
      return (
        <span key={message._id}>
          <span>
            <Link to={`/profile/${sender._id}`}>{sender.username}</Link>:{" "}
            {message.message}
          </span>
          <br />
        </span>
      );
    });
  }

  return <MessageListView renderConversation={renderConversation} />;
}
