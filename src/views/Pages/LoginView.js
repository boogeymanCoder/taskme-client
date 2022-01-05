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
    <div className="row justify-content-center pt-5">
      <div className="col-lg-5 col-md-5">
        <h1 className="text-center">Login</h1>
        <p className="text-center">
          New to this site? <Link to="/register">Register</Link>
        </p>
        <form onSubmit={loginHandler}>
          <input
            type="text"
            className="form-control mb-1"
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            placeholder="Username/Email"
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            className="form-control mb-1"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <input
            type="checkbox"
            className="form-check-input"
            onChange={(e) => setShowPassword(e.target.checked)}
            checked={showPassword}
          />
          <span> Show Password</span>
          <br />
          <input
            className="btn btn-dark float-end"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
}
