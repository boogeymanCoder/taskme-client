import React from "react";

export default function NotificationView({
  notification,
  renderConversations,
}) {
  return (
    <div>
      <h1>Notification</h1>
      <h2>Applications</h2>
      <h2>Comments</h2>
      <h2>Conversations</h2>
      {notification ? renderConversations(notification.conversations) : null}
      <h2>Offers</h2>
      <h2>Posts</h2>
      <h2>Tasks</h2>
    </div>
  );
}
