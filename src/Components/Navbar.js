import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const account = useSelector((state) => state.accountLog.account);
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
        {account !== null && (
          <li>
            <Link to={`/profile/${account._id}`}>Profile</Link>
          </li>
        )}
        <li>
          <Link to="/inbox">Inbox</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
        <li>
          <Link to="/appointment">Appointment</Link>
        </li>
        <li>
          <Link to="/notification">Notification</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
      </ul>
    </div>
  );
}
