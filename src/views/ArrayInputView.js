import React from "react";

export default function ArrayInputView({
  title,
  array,
  element,
  handleMembersInput,
  handleMembersBlur,
  placeholder,
}) {
  return (
    <div>
      <span>
        {title}: {array.length > 0 ? array.toString() : "None"}
      </span>
      <br />
      <input
        className="form-control mb-1"
        type="text"
        name="array"
        value={element}
        onInput={handleMembersInput}
        onBlur={handleMembersBlur}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
