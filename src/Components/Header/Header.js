import React from "react";

import LogoHeader from "./LogoHeader/LogoHeader";
import DetalDivHeader from "./DetailDivHeader/DetailDivHeader";
import ConfigHeader from "./ConfigHeader/ConfigHeader";
import DisplayMsg from "./DisplayMsg/DisplayMsg";

import "./Header.css";
export default function Header() {
  return (
    <>
      <div className=""></div>
      <header>
        <LogoHeader />
        <DetalDivHeader />
        <ConfigHeader />
        <DisplayMsg />
      </header>
    </>
  );
}
