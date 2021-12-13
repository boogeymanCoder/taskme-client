import React, { useState } from "react";
import { useAuthCheck } from "../hooks/auth";
import AppointmentView from "../views/Pages/AppointmentView";

export default function Appointment() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useAuthCheck("/login");

  return (
    <AppointmentView setFrom={setFrom} setTo={setTo} from={from} to={to} />
  );
}
