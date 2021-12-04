import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getNotificationByOwner,
  notificationRemoveConversation,
} from "../api/notification";
import { devLog } from "../dev/log";
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
        devLog(response.data);
      })
      .catch((error) => {
        devLog(error);
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
                devLog("Notification Conversation Remove Successful")
              )
              .catch((error) =>
                devLog("Notification Conversation Remove Failed")
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
