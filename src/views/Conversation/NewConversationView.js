import React from "react";

export default function NewConversationView({
  sendMessage,
  members,
  member,
  name,
  setName,
  handleMembersInput,
  handleMembersBlur,
  message,
  setMessage,
}) {
  return (
    <div>
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
    </div>
  );
}
