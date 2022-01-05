import React from "react";
import ConversationList from "../../Components/Conversation/ConversationList";
import NewConversation from "../../Components/Conversation/NewConversation";

export default function InboxView() {
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-md-8">
        <h1>Inbox</h1>
        <NewConversation />
        <ConversationList />
      </div>
    </div>
  );
}
