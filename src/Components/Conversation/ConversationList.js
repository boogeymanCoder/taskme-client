import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ConversationListView from "../../views/Conversation/ConversationListView";
import Pagination from "../Pagination";

export default function ConversationList() {
  const inbox = useSelector((state) => state.inbox.inbox);
  const [conversations, setConversations] = useState();
  const [conversationBatch, setConversationBatch] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  const [enablePrevious, setEnablePrevious] = useState(false);

  useEffect(() => {
    if (!inbox) return setConversations([]);
    setConversations((lastState) => {
      const updatedConversations = inbox.slice(
        (conversationBatch - 1) * 20,
        conversationBatch * 20
      );

      if (updatedConversations.length === 20) setEnableNext(true);
      else setEnableNext(false);

      if (conversationBatch <= 1) setEnablePrevious(false);
      else setEnablePrevious(true);

      return updatedConversations;
    });
  }, [inbox, conversationBatch]);

  function renderConversations() {
    if (!conversations) return <h2>Loading...</h2>;
    else if (conversations.length < 1) return <h2>No Conversations Yet</h2>;
    return conversations.map((conversation) => (
      <div key={conversation._id}>
        <Link to={`conversation/${conversation._id}`}>{conversation.name}</Link>
      </div>
    ));
  }

  return (
    <ConversationListView
      renderConversations={renderConversations}
      pagination={
        <Pagination
          setPage={setConversations}
          setPageBatch={setConversationBatch}
          enablePrevious={enablePrevious}
          setEnablePrevious={setEnablePrevious}
          enableNext={enableNext}
          setEnableNext={setEnableNext}
        />
      }
    />
  );
}
