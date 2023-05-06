import React from "react";

import LogoHeader from "./LogoHeader/LogoHeader";
import DetalDivHeader from "./DetailDivHeader/DetailDivHeader";
import ConfigHeader from "./ConfigHeader/ConfigHeader";

import "./Header.css";
export default function Header() {
  return (
    <header>
      <LogoHeader />
      <DetalDivHeader />
      <ConfigHeader />
    </header>
  );
}
