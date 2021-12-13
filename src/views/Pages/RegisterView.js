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
    <div>
      <h1>Register</h1>
      <p>
        Already a member? <Link to="/login">Login</Link>
      </p>
      <form onSubmit={register}>
        <input
          style={{ color: usrColor }}
          type="text"
          onChange={usernameChange}
          value={username}
          placeholder="Username"
          required
        />
        <br />
        <input
          style={{ color: passColor }}
          type={showPassword ? "text" : "password"}
          onChange={passwordChange}
          value={password}
          placeholder="New Password"
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
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
