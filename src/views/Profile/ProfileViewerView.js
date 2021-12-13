import React from "react";

export default function ProfileViewerView({ profile }) {
  return (
    <div>
      <span>{profile.username}</span> <br />
      <span>Fullname: {profile.fullname}</span> <br />
      <span>Gender: {profile.gender}</span> <br />
      <span>Address: {profile.address}</span> <br />
      <span>Contact: {profile.contact}</span> <br />
      <span>Email: {profile.email}</span> <br />
    </div>
  );
}
