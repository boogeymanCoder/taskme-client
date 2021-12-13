import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MessageInputView from "../../views/Message/MessageInputView";

export default function MessageInput({ conversation, setConversation }) {
  const account = useSelector((state) => state.accountLog.account);
  const [message, setMessage] = useState("");

  async function createMessage() {
    return axios.post(`${process.env.REACT_APP_API_HOST}/api/message`, {
      replyTo: null,
      sender: account,
      message: message,
      date: new Date(),
    });
  }

  async function putMessage(message) {
    return axios.put(
      `${process.env.REACT_APP_API_HOST}/api/conversation/${conversation._id}/messages`,
      { message: message }
    );
  }

  function sendHandler(e) {
    e.preventDefault();

    createMessage()
      .then((res) => {
        putMessage(res.data)
          .then((res) => {
            console.log(res.data);
            setConversation(res.data);
            setMessage("");
          })
          .catch((err) => {
            console.log("putMessage error:", err);
          });
      })
      .catch((err) => {
        console.log("createMessage error:", err);
      });
  }

  return (
    <MessageInputView
      sendHandler={sendHandler}
      setMessage={setMessage}
      message={message}
    />
  );
}
