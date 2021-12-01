import React, { useState } from "react";
import { findAccountById } from "../api/account";

export default function ProfileView({ id }) {
  const [profile, setProfile] = useState();

  useState(() => {
    findAccountById(id)
      .then((response) => setProfile(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!profile) return <h2>Loading...</h2>;

  return (
    <div>
      <span>{profile.username}</span>
      <span>Fullname: {profile.fullname}</span>
      <span>Gender: {profile.gender}</span>
      <span>Address: {profile.address}</span>
      <span>Contact: {profile.contact}</span>
      <span>Email: {profile.email}</span>
    </div>
  );
}
