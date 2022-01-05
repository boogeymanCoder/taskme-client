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
          className="form-control mb-1"
          type="text"
          name="members"
          value={member}
          onInput={handleMembersInput}
          onBlur={handleMembersBlur}
          placeholder="Recipient1 Recipient2 ..."
          required
        />
        <input
          className="form-control mb-1"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Conversation Name (Recipient by default)"
        />
        <textarea
          className="form-control mb-1"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
          rows="5"
        ></textarea>
        <input
          className="btn btn-dark float-end"
          type="submit"
          value="New Message"
        />
      </form>
      <br />
      <br />
    </div>
  );
}
