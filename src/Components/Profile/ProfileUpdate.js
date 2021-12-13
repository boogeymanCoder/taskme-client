import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, update } from "../../redux/reducers/accountLog";
import { forgetInbox } from "../../redux/reducers/inbox";
import ProfileUpdateView from "../../views/Profile/ProfileUpdateView";

export default function ProfileUpdate() {
  const account = useSelector((state) => state.accountLog.account);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passColor, setPassColor] = useState("red");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailColor, setEmailColor] = useState("green");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();

  // TODO add task timeline
  useEffect(() => {
    if (account) {
      console.log("Account: " + JSON.stringify(account));
      setUsername(account.username);
      setEmail(account.email);
      setFullname(account.fullname);
      setAddress(account.address);
      setContact(account.contact);
      setGender(account.gender);
    }
  }, [account]);

  function passwordChange(e) {
    setPassword(e.target.value);
    if (
      /[0-9]+/.test(e.target.value) &&
      /[a-z]+/.test(e.target.value) &&
      /[A-Z]+/.test(e.target.value) &&
      /[^0-9a-zA-Z]+/.test(e.target.value)
    ) {
      if (/.{8,}/.test(e.target.value)) {
        setPassColor("green");
      } else if (/.{6,}/.test(e.target.value)) {
        setPassColor("orange");
      }
    } else {
      setPassColor("red");
    }
  }

  function emailChange(e) {
    setEmail(e.target.value);
    if (e.target.value === "") return;
    if (e.target.value === account.email) return setEmailColor("green");
    axios
      .get(
        `${process.env.REACT_APP_API_HOST}/api/account/validate/email/${e.target.value}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setEmailColor(res.data ? "green" : "red");
      })
      .catch((err) => {
        console.log("Something Went Wrong, Cause", err);
      });
  }

  function updateHandler(e) {
    e.preventDefault();
    dispatch(
      update({
        _id: account._id,
        password: password ? password : null,
        email: email,
        fullname: fullname,
        address: address,
        contact: contact,
        gender: gender,
      })
    );
  }

  function logoutHandler() {
    if (window.confirm("Are you sure you want to logout?")) {
      dispatch(logout());
      dispatch(forgetInbox());
    }
  }

  if (!account) {
    return <h1>Loading....</h1>;
  }

  return (
    <ProfileUpdateView
      logoutHandler={logoutHandler}
      emailColor={emailColor}
      emailChange={emailChange}
      email={email}
      setFullname={setFullname}
      fullname={fullname}
      setAddress={setAddress}
      address={address}
      setContact={setContact}
      contact={contact}
      setGender={setGender}
      gender={gender}
      updateHandler={updateHandler}
      username={username}
      passColor={passColor}
      showPassword={showPassword}
      passwordChange={passwordChange}
      password={password}
      setShowPassword={setShowPassword}
    />
  );
}
