import React from "react";
import { Link } from "react-router-dom";

export default function RegisterView({
  register,
  usrColor,
  usernameChange,
  username,
  passColor,
  showPassword,
  passwordChange,
  password,
  setShowPassword,
  emailColor,
  emailChange,
  email,
  setFullname,
  fullname,
  setAddress,
  setContact,
  setGender,
  gender,
  address,
  contact,
}) {
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-4">
        <h1 className="text-center">Register</h1>
        <p className="text-center">
          Already a member? <Link to="/login">Login</Link>
        </p>
        <form onSubmit={register}>
          <input
            className="form-control mb-1"
            style={{ color: usrColor }}
            type="text"
            onChange={usernameChange}
            value={username}
            placeholder="Username"
            required
          />
          <input
            className="form-control mb-1"
            style={{ color: passColor }}
            type={showPassword ? "text" : "password"}
            onChange={passwordChange}
            value={password}
            placeholder="New Password"
            required
          />
          <input
            type="checkbox"
            onChange={(e) => setShowPassword(e.target.checked)}
            checked={showPassword}
          />
          <span> Show Password</span>
          <input
            className="form-control mb-1"
            style={{ color: emailColor }}
            type="email"
            onChange={emailChange}
            value={email}
            placeholder="Email"
            required
          />
          <input
            className="form-control mb-1"
            type="text"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            placeholder="Fullname"
            required
          />
          <input
            className="form-control mb-1"
            type="text"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            placeholder="Address"
            required
          />
          <input
            className="form-control mb-1"
            type="tel"
            onChange={(e) => setContact(e.target.value)}
            value={contact}
            placeholder="Contact Number"
            required
          />
          <select
            className="form-select mb-1"
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
          <input
            className="btn btn-dark float-end"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
}
