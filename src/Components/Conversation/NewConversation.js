import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAccountByUsername } from "../../api/account";
import { createConversation } from "../../api/conversation";
import { createMessage } from "../../api/message";
import { fetchInbox } from "../../redux/reducers/inbox";
import NewConversationView from "../../views/Conversation/NewConversationView";

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
        console.log("finding members");
        await findAccountByUsername(memberToFind)
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
            console.log(memberIds);
            createConversation({
              name: name ? name : members.toString(),
              members: [...memberIds, account._id],
              messages: [sentMessage],
            })
              .then((res) => {
                dispatch(fetchInbox(account));
                console.log(res.data);
              })
              .catch((err) => {
                alert(err.response);
                console.log("conversation error:", err);
              });
          })
          .catch((err) => {
            alert("Invalid Recipient, " + err.response.data);
            console.log("members error:", err.response);
          });
      })
      .catch((err) => console.log("message error:", err));
  }

  return (
    <NewConversationView
      sendMessage={sendMessage}
      members={members}
      member={member}
      name={name}
      setName={setName}
      handleMembersInput={handleMembersInput}
      handleMembersBlur={handleMembersBlur}
      message={message}
      setMessage={setMessage}
    />
  );
}
