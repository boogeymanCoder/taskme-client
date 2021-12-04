import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getNotificationByOwner,
  notificationRemoveConversation,
} from "../api/notification";
import { useAuthCheck } from "../hooks/auth";

export default function Notification() {
  const account = useSelector((state) => state.accountLog.account);
  const [notification, setNotification] = useState();

  useAuthCheck("/login");

  useEffect(() => {
    if (!account) return;
    getNotificationByOwner(account._id)
      .then((response) => {
        setNotification(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [account]);

  function renderConversations(conversations) {
    return conversations.map((conversation) => {
      return (
        <Link
          key={conversation}
          to={`/inbox/conversation/${conversation}`}
          onClick={(e) => {
            notificationRemoveConversation(notification._id, conversation)
              .then((response) =>
                console.log("Notification Conversation Remove Successful")
              )
              .catch((error) =>
                console.log("Notification Conversation Remove Failed")
              );
          }}
        >
          New Message
        </Link>
      );
    });
  }

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
