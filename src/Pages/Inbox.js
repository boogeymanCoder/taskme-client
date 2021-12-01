import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ConversationList from "../Components/ConversationList";
import NewConversation from "../Components/NewConversation";
import { useAuthCheck } from "../hooks/auth";
import { fetchInbox } from "../redux/reducers/inbox";

export default function Inbox() {
  const account = useSelector((state) => state.accountLog.account);
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const inbox = useSelector((state) => state.inbox.inbox);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Fetching Inbox");
    dispatch(fetchInbox(account));
    // TODO change to be triggered by webhook
  }, [account, dispatch]);

  useAuthCheck("/login");

  // TODO search message

  return (
    <>
      <h1>Inbox</h1>
      <NewConversation />
      <ConversationList />
    </>
  );
}
