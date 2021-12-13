import React from "react";

export default function ProfileUpdateView({
  logoutHandler,
  emailColor,
  emailChange,
  email,
  setFullname,
  fullname,
  setAddress,
  address,
  setContact,
  contact,
  setGender,
  gender,
  updateHandler,
  username,
  passColor,
  showPassword,
  passwordChange,
  password,
  setShowPassword,
}) {
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
