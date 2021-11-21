import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
  }, [account, dispatch]);

  useAuthCheck("/inbox", "/login");

  function handleMembers(e) {
    if (e.nativeEvent.data === " ") {
      if (member.trim() !== "") {
        setMembers([...members, member.trim()]);
      }
      setMember(" ");
      return;
    } else if (
      e.nativeEvent.data === null &&
      e.target.value === "" &&
      members.length > 0
    ) {
      const lastMember = members.pop();
      setMembers([...members]);
      setMember(" " + lastMember);
      return;
    }

    setMember(e.target.value);
  }

  async function createMessage() {
    return axios.post(`${process.env.REACT_APP_API_HOST}/api/message/`, {
      replyTo: null,
      sender: account._id,
      message: message,
      date: new Date(),
    });
  }

  async function findMembers() {
    return new Promise(async (resolve, reject) => {
      if (members.length < 1) {
        return resolve(null);
      }
      const memberIds = [];
      for (var memberToFind of members) {
        console.log("finding members");
        await axios
          .get(
            `${process.env.REACT_APP_API_HOST}/api/account/username/${memberToFind}`,
            { withCredentials: true }
          )
          .then((res) => {
            memberIds.push(res.data._id);
            console.log("found:", res.data._id);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      }
      resolve(memberIds);
    });
  }

  async function createConversation(sentMessage, memberIds) {
    return axios.post(`${process.env.REACT_APP_API_HOST}/api/conversation/`, {
      name: name ? name : members.toString(),
      members: memberIds,
      messages: [sentMessage],
    });
  }

  function sendMessage(e) {
    e.preventDefault();
    createMessage()
      .then((res) => {
        const sentMessage = res.data;
        findMembers()
          .then((memberIds) => {
            createConversation(sentMessage, memberIds)
              .then((res) => {
                dispatch(fetchInbox(account));
                console.log(res.data);
              })
              .catch((err) => {
                alert(err.response.data.message);
                console.log("conversation error:", err.response);
              });
          })
          .catch((err) => {
            alert("Invalid Recipient, " + err.response.data);
            console.log("members error:", err.response);
          });
      })
      .catch((err) => console.log("message error:", err));
  }

  function renderConversations() {
    if (inbox) {
      return inbox.map((conversation) => (
        <div key={conversation._id}>
          <Link to={`conversation/${conversation._id}`}>
            {conversation.name}
          </Link>
        </div>
      ));
    }
  }

  return (
    <>
      <h1>Inbox</h1>
      <form onSubmit={sendMessage}>
        <span>To: {members.length > 0 ? members.toString() : "None"}</span>
        <br />
        <input
          type="text"
          name="members"
          value={member}
          onInput={handleMembers}
          placeholder="Recipient1 Recipient2 ..."
          required
        />
        <br />
        <span>Conversation Name:</span>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Recipient by default"
        />
        <br />
        <span>Message:</span>
        <br />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
        ></textarea>
        <br />
        <input type="submit" value="New Message" />
      </form>
      {renderConversations()}
    </>
  );
}
