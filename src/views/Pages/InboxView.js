import React from "react";
import ConversationList from "../../Components/Conversation/ConversationList";
import NewConversation from "../../Components/Conversation/NewConversation";

export default function InboxView() {
  return (
    <div>
      <h1>Inbox</h1>
      <NewConversation />
      <ConversationList />
    </div>
  );
}
