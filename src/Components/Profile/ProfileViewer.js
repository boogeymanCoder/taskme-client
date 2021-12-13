import React, { useState } from "react";
import { findAccountById } from "../../api/account";
import ProfileViewerView from "../../views/Profile/ProfileViewerView";

export default function ProfileViewer({ id }) {
  const [profile, setProfile] = useState();

  useState(() => {
    findAccountById(id)
      .then((response) => setProfile(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!profile) return <h2>Loading...</h2>;

  return <ProfileViewerView profile={profile} />;
}
