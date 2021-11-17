import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthCheck } from "../hooks/auth";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginAuthCheck = useAuthCheck("/", "/login");

  function login(e) {
    console.log("Username: " + username);
    console.log("Password: " + password);
    e.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/api/account/login`,
        {
          username: username,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.message) {
          return alert(res.data.message);
        }
        console.log("Received after login:", res);
        axios
          .get(`${process.env.REACT_APP_API_HOST}/api/account`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res);

            loginAuthCheck();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // eslint-disable-next-line
  useEffect(loginAuthCheck, []);

  // TODO use redux to save account and check before rendering jsx
  return (
    <>
      <h1>Login</h1>
      <p>
        New to this site? <Link to="/register">Register</Link>
      </p>
      <form onSubmit={login}>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username/Email"
          required
        />
        <br />
        <input
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <br />
        <input
          type="checkbox"
          onChange={(e) => setShowPassword(e.target.checked)}
          checked={showPassword}
        />
        <span>Show Password</span>
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
}
