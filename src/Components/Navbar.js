import React from "react";
import { useSelector } from "react-redux";
import NavbarView from "../views/NavbarView";

export default function Navbar() {
  const account = useSelector((state) => state.accountLog.account);
  return <NavbarView account={account} />;
}
