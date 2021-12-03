import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProfileView from "../Components/ProfileView";
import { useAuthCheck } from "../hooks/auth";
import { logout, update } from "../redux/reducers/accountLog";
import { forgetInbox } from "../redux/reducers/inbox";

export default function ProfileUpdate() {
  const { id } = useParams();
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

  if (id !== account._id) return <ProfileView id={id} />;

  return (
    <div>
      <input type="button" value="Logout" onClick={logoutHandler} />
      <br />
      <br />

      <form onSubmit={updateHandler}>
        <span>{username}</span>
        <br />
        <input
          style={{ color: passColor }}
          type={showPassword ? "text" : "password"}
          onChange={passwordChange}
          value={password}
          placeholder="Password"
        />
        <br />
        <input
          type="checkbox"
          onChange={(e) => setShowPassword(e.target.checked)}
          checked={showPassword}
        />
        <span>Show Password</span>
        <br />
        <input
          style={{ color: emailColor }}
          type="email"
          onChange={emailChange}
          value={email}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="text"
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
          placeholder="Fullname"
          required
        />
        <br />
        <input
          type="text"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          placeholder="Address"
          required
        />
        <br />
        <input
          type="tel"
          onChange={(e) => setContact(e.target.value)}
          value={contact}
          placeholder="Contact Number"
          required
        />
        <br />
        <select
          onChange={(e) => setGender(e.target.value)}
          value={gender}
          required
        >
          <option value="" defaultValue hidden>
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}
