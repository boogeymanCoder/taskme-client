import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ProfileUpdate from "../Components/Profile/ProfileUpdate";
import ProfileView from "../Components/Profile/ProfileView";
import { useAuthCheck } from "../hooks/auth";

export default function Profile() {
  const { id } = useParams();
  const account = useSelector((state) => state.accountLog.account);

  useAuthCheck("/login");

  function renderProfile() {
    if (!account) return;
    if (id !== account._id) {
      return <ProfileView id={id} />;
    } else {
      return <ProfileUpdate />;
    }
  }

  return (
    <div>
      <h1>Profile</h1>
      {renderProfile()}
    </div>
  );
}
