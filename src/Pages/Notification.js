import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getNotificationByOwner,
  notificationRemoveConversation,
} from "../api/notification";
import { useAuthCheck } from "../hooks/auth";
import NotificationView from "../views/Pages/NotificationView";

export default function Notification() {
  const account = useSelector((state) => state.accountLog.account);
  const [notification, setNotification] = useState();

  useAuthCheck("/login");

  useEffect(() => {
    var cancel = false;

    if (!account) return;
    getNotificationByOwner(account._id)
      .then((response) => {
        if (cancel) return;
        setNotification(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      cancel = true;
    };
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
    <NotificationView
      notification={notification}
      renderConversations={renderConversations}
    />
  );
}
