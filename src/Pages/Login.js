import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/accountLog";
import { useNonAuthCheck } from "../hooks/auth";
import LoginView from "../views/Pages/LoginView";

export default function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  useNonAuthCheck("/");

  function loginHandler(e) {
    e.preventDefault();
    dispatch(login({ usernameOrEmail: usernameOrEmail, password: password }));
  }

  return (
    <LoginView
      loginHandler={loginHandler}
      setUsernameOrEmail={setUsernameOrEmail}
      showPassword={showPassword}
      setPassword={setPassword}
      setShowPassword={setShowPassword}
    />
  );
}
