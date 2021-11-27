import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ConversationList() {
  const inbox = useSelector((state) => state.inbox.inbox);

  function renderConversations() {
    if (inbox) {
      return inbox.map((conversation) => (
        <div key={conversation._id}>
          <Link to={`conversation/${conversation._id}`}>
            {conversation.name}
          </Link>
        </div>
      ));
    } else {
      return <h2>No Messages Yet</h2>;
    }
  }

  return <div>{renderConversations()}</div>;
}
