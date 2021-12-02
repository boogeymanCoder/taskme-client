import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProfileUpdate from "../Components/ProfileUpdate";
import ProfileView from "../Components/ProfileView";
import { useAuthCheck } from "../hooks/auth";
import { logout, update } from "../redux/reducers/accountLog";
import { forgetInbox } from "../redux/reducers/inbox";

export default function Profile() {
  const { id } = useParams();
  const account = useSelector((state) => state.accountLog.account);

  function renderProfile() {
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
