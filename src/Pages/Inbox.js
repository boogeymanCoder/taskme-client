import React, { useState } from "react";

export default function Inbox() {
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleMembers(e) {
    if (e.nativeEvent.data === " ") {
      setMembers([...members, member.trim()]);
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

  // function sendMessage() {
  //   // FIXME we really need redux
  //   axios
  //     .post(`${process.env.REACT_APP_API_HOST}/api/message/`, {
  //       replyTo: null,
  //       sender: req.user,
  //       message: message,
  //       date: new Date(),
  //     })
  //     .then((res) => {
  //       const message = res.data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // useEffect(useAuthCheck("/inbox"), []);

  return (
    <>
      <h1>Inbox</h1>
      <form>
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
    </>
  );
}
