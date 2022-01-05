import React from "react";
import Timeline from "../../Components/Profile/Timeline";

export default function ProfileView({ renderProfile }) {
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-md-8">
        <h1>Profile</h1>
        {renderProfile()}
        <Timeline />
      </div>
    </div>
  );
}
