import React from "react";

export default function ConversationListView({
  renderConversations,
  pagination,
}) {
  return (
    <div>
      {renderConversations()}

      {pagination}
    </div>
  );
}
