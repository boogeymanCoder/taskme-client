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
      <input
        className="btn btn-dark float-end"
        type="button"
        value="Logout"
        onClick={logoutHandler}
      />
      <br />
      <form onSubmit={updateHandler}>
        <h2>{username}</h2>
        <input
          className="form-control mb-1"
          style={{ color: passColor }}
          type={showPassword ? "text" : "password"}
          onChange={passwordChange}
          value={password}
          placeholder="Password"
        />
        <div className="form-check">
          <input
            className="form-check-input mb-1"
            type="checkbox"
            onChange={(e) => setShowPassword(e.target.checked)}
            checked={showPassword}
          />
          <label className="form-check-label">Show Password</label>
        </div>
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
          value="Update"
        />
      </form>
    </div>
  );
}
