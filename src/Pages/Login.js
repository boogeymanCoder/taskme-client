import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/accountLog";
import { useNonAuthCheck } from "../hooks/auth";

export default function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  useNonAuthCheck("/login", "/");

  function loginHandler(e) {
    e.preventDefault();
    dispatch(login({ usernameOrEmail: usernameOrEmail, password: password }));
  }

  return (
    <>
      <h1>Login</h1>
      <p>
        New to this site? <Link to="/register">Register</Link>
      </p>
      <form onSubmit={loginHandler}>
        <input
          type="text"
          onChange={(e) => setUsernameOrEmail(e.target.value)}
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
