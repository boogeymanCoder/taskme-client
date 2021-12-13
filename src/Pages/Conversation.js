import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuthCheck } from "../hooks/auth";
import { findConversation } from "../api/conversation";
import Pagination from "../Components/Pagination";
import ConversationView from "../views/Pages/ConversationView";

export default function Conversation() {
  const { conversationId } = useParams();
  const [conversation, setConversation] = useState();
  const [messages, setMessages] = useState();
  const [messageBatch, setMessageBatch] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  const [enablePrevious, setEnablePrevious] = useState(false);

  useAuthCheck("/login");

  useEffect(() => {
    var cancel = false;
    console.log("getConversation called");
    findConversation(conversationId)
      .then((response) => {
        if (cancel) return;
        setConversation((lastState) => {
          return response.data;
        });
      })
      .catch((error) => console.log(error));

    return () => {
      cancel = true;
    };
  }, [conversationId]);

  useEffect(() => {
    if (!conversation) return;
    setMessages((lastState) => {
      var batchedMessage = [...conversation.messages];
      var start = batchedMessage.length - 20 * messageBatch;
      var size = 20;
      if (start < 0) {
        size = 20 + start;
        start = 0;
      }

      batchedMessage = batchedMessage.splice(start, size);

      console.log("after splice:", batchedMessage);
      console.log("MessageBatch:", start);

      batchedMessage.sort((a, b) => new Date(a.date) - new Date(b.date));
      console.log(batchedMessage);

      if (batchedMessage.length === 20) setEnablePrevious(true);
      else setEnablePrevious(false);

      if (messageBatch <= 1) setEnableNext(false);
      else setEnableNext(true);

      return batchedMessage;
    });
  }, [conversation, messageBatch]);

  return (
    <ConversationView
      pagination={
        <Pagination
          setPage={setMessages}
          setPageBatch={setMessageBatch}
          enablePrevious={enablePrevious}
          setEnablePrevious={setEnablePrevious}
          enableNext={enableNext}
          setEnableNext={setEnableNext}
          reverse={true}
        />
      }
      conversation={conversation}
      messages={messages}
      setConversation={setConversation}
    />
  );
}
