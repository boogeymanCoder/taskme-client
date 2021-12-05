import React, { useState } from "react";
import { findAccountById } from "../../api/account";

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
      <span>{profile.username}</span> <br />
      <span>Fullname: {profile.fullname}</span> <br />
      <span>Gender: {profile.gender}</span> <br />
      <span>Address: {profile.address}</span> <br />
      <span>Contact: {profile.contact}</span> <br />
      <span>Email: {profile.email}</span> <br />
    </div>
  );
}
