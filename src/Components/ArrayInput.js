import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ArrayInput({ array, setArray, exempt, placeholder }) {
  const [element, setElement] = useState("");

  function addMember() {
    const newElement = element.trim();
    if (newElement !== "") {
      if (!array.includes(newElement)) {
        if (exempt !== undefined && !exempt.includes(newElement)) return;
        setArray([...array, newElement]);
      }
    }
    setElement(" ");
  }

  function handleMembersInput(e) {
    if (e.nativeEvent.data === " ") {
      addMember();
      return;
    } else if (
      e.nativeEvent.data === null &&
      e.target.value === "" &&
      array.length > 0
    ) {
      const lastMember = array.pop();
      setArray([...array]);
      setElement(" " + lastMember);
      return;
    }

    setElement(e.target.value);
  }

  function handleMembersBlur(e) {
    addMember();
  }

  return (
    <div>
      <span>To: {array.length > 0 ? array.toString() : "None"}</span>
      <br />
      <input
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
