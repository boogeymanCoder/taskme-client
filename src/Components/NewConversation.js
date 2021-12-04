import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAccountByUsername } from "../api/account";
import { createConversation } from "../api/conversation";
import { createMessage } from "../api/message";
import { devLog } from "../dev/log";
import { fetchInbox } from "../redux/reducers/inbox";

export default function NewConversation() {
  const account = useSelector((state) => state.accountLog.account);
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  function addMember() {
    const newMem = member.trim();
    if (newMem !== "") {
      if (!members.includes(newMem) && newMem !== account.username)
        setMembers([...members, newMem]);
    }
    setMember(" ");
  }

  function handleMembersInput(e) {
    if (e.nativeEvent.data === " ") {
      addMember();
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

  function handleMembersBlur(e) {
    addMember();
  }

  async function findMembers() {
    return new Promise(async (resolve, reject) => {
      if (members.length < 1) {
        return reject({ response: { data: "No Recipient" } });
      }
      const memberIds = [];
      for (var memberToFind of members) {
        devLog("finding members");
        await findAccountByUsername(memberToFind)
          .then((res) => {
            memberIds.push(res.data._id);
            devLog("found:", res.data._id);
          })
          .catch((err) => {
            devLog(err);
            reject(err);
          });
      }
      resolve(memberIds);
    });
  }

  function sendMessage(e) {
    e.preventDefault();
    if (members.length < 1) {
      return alert("Invalid Recipient, No Recipient");
    }
    createMessage({
      replyTo: null,
      sender: account._id,
      message: message,
      date: new Date(),
    })
      .then((res) => {
        const sentMessage = res.data;
        findMembers()
          .then((memberIds) => {
            devLog(memberIds);
            createConversation({
              name: name ? name : members.toString(),
              members: [...memberIds, account._id],
              messages: [sentMessage],
            })
              .then((res) => {
                dispatch(fetchInbox(account));
                devLog(res.data);
              })
              .catch((err) => {
                alert(err.response);
                devLog("conversation error:", err);
              });
          })
          .catch((err) => {
            alert("Invalid Recipient, " + err.response.data);
            devLog("members error:", err.response);
          });
      })
      .catch((err) => devLog("message error:", err));
  }

  return (
    <form onSubmit={sendMessage}>
      <span>To: {members.length > 0 ? members.toString() : "None"}</span>
      <br />
      <input
        type="text"
        name="members"
        value={member}
        onInput={handleMembersInput}
        onBlur={handleMembersBlur}
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
  );
}
