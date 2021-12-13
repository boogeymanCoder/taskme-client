import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ProfileUpdate from "../Components/Profile/ProfileUpdate";
import ProfileViewer from "../Components/Profile/ProfileViewer";
import { useAuthCheck } from "../hooks/auth";
import ProfileView from "../views/Pages/ProfileView";

export default function Profile() {
  const { id } = useParams();
  const account = useSelector((state) => state.accountLog.account);

  useAuthCheck("/login");

  function renderProfile() {
    if (!account) return;
    if (id !== account._id) {
      return <ProfileViewer id={id} />;
    } else {
      return <ProfileUpdate />;
    }
  }

  return <ProfileView renderProfile={renderProfile} />;
}
