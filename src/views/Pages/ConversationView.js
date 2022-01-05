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
    <div className="row justify-content-center pt-5">
      <div className="col-md-8">
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
    </div>
  );
}
