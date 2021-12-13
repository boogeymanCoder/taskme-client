import React from "react";
import { Link } from "react-router-dom";

export default function LoginView({
  loginHandler,
  setUsernameOrEmail,
  showPassword,
  setPassword,
  setShowPassword,
}) {
  return (
    <div>
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
    </div>
  );
}
