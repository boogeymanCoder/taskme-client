import React from "react";
import MessageInput from "../../Components/Message/MessageInput";
import MessageList from "../../Components/Message/MessageList";

export default function ConversationView({
  pagination,
  conversation,
  messages,
  setConversation,
}) {
  return (
    <div>
      <div>Conversation</div>

      {pagination}
      <br />
      <MessageList
        members={conversation ? conversation.members : undefined}
        messages={messages}
      />
      <MessageInput
        conversation={conversation}
        setConversation={setConversation}
      />
    </div>
  );
}
