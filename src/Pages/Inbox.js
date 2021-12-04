import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ConversationList from "../Components/ConversationList";
import NewConversation from "../Components/NewConversation";
import { useAuthCheck } from "../hooks/auth";
import { fetchInbox } from "../redux/reducers/inbox";

export default function Inbox() {
  const account = useSelector((state) => state.accountLog.account);
  const dispatch = useDispatch();

  useAuthCheck("/login");

  useEffect(() => {
    console.log("Fetching Inbox");
    dispatch(fetchInbox(account));
    // TODO change to be triggered by webhook
  }, [account, dispatch]);

  // TODO search message

  return (
    <>
      <h1>Inbox</h1>
      <NewConversation />
      <ConversationList />
    </>
  );
}
