import React from "react";
import { Link } from "react-router-dom";

export default function NavbarView({ account }) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={account !== null ? `/profile/${account._id}` : "#"}>
            Profile
          </Link>
        </li>
        <li>
          <Link to="/inbox">Inbox</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
        <li>
          <Link to="/appointment">Appointment</Link>
        </li>
        {/* <li>
          <Link to="/notification">Notification</Link>
        </li> */}
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
}
