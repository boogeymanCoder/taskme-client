import React from "react";

export default function MessageListView({ renderConversation }) {
  return <div>{renderConversation()}</div>;
}
