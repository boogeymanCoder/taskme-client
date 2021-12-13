import React from "react";
import Timeline from "../../Components/Profile/Timeline";

export default function ProfileView({ renderProfile }) {
  return (
    <div>
      <h1>Profile</h1>
      {renderProfile()}
      <Timeline />
    </div>
  );
}
