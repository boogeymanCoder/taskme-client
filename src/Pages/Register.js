import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useNonAuthCheck } from "../hooks/auth";
import RegisterView from "../views/Pages/RegisterView";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [usrColor, setUsrColor] = useState("red");
  const [password, setPassword] = useState("");
  const [passColor, setPassColor] = useState("red");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailColor, setEmailColor] = useState("red");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");

  useNonAuthCheck("/");

  function usernameChange(e) {
    setUsername(e.target.value);
    if (e.target.value === "") return;
    axios
      .get(
        `${process.env.REACT_APP_API_HOST}/api/account/validate/username/${e.target.value}`,
        { withCredentials: true }
      )
      .then((res) => {
        setUsrColor(res.data ? "green" : "red");
      })
      .catch((err) => {
        console.log("Something Went Wrong, Cause", err);
      });
  }

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
    axios
      .get(
        `${process.env.REACT_APP_API_HOST}/api/account/validate/email/${e.target.value}`,
        { withCredentials: true }
      )
      .then((res) => {
        setEmailColor(res.data ? "green" : "red");
      })
      .catch((err) => {
        console.log("Something Went Wrong, Cause", err);
      });
  }

  function register(e) {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/api/account`,
        {
          username: username,
          password: password,
          email: email,
          fullname: fullname,
          address: address,
          contact: contact,
          gender: gender,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("Registered!");
        navigate("/login");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  // TODO use redux to save account and check before rendering jsx
  return (
    <RegisterView
      register={register}
      usrColor={usrColor}
      usernameChange={usernameChange}
      username={username}
      passColor={passColor}
      showPassword={showPassword}
      passwordChange={passwordChange}
      password={password}
      setShowPassword={setShowPassword}
      emailColor={emailColor}
      emailChange={emailChange}
      email={email}
      setFullname={setFullname}
      fullname={fullname}
      setAddress={setAddress}
      setContact={setContact}
      setGender={setGender}
      gender={gender}
      address={address}
      contact={contact}
    />
  );
}
