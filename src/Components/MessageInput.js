import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { devLog } from "../dev/log";

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
            devLog(res.data);
            setConversation(res.data);
            setMessage("");
          })
          .catch((err) => {
            devLog("putMessage error:", err);
          });
      })
      .catch((err) => {
        devLog("createMessage error:", err);
      });
  }

  return (
    <>
      <form onSubmit={sendHandler}>
        <input
          type="text"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}
