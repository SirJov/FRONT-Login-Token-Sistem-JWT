import React, { useContext, useEffect, useState } from "react";

import LogoHeader from "./LogoHeader/LogoHeader";
import DetalDivHeader from "./DetailDivHeader/DetailDivHeader";
import ConfigHeader from "./ConfigHeader/ConfigHeader";
import DisplayMsg from "./DisplayMsg/DisplayMsg";

import ContextPagSelected from "../../Context/ContextPagSelected";

import "./Header.css";
export default function Header() {
  const [PagSelected] = useContext(ContextPagSelected);

  return (
    <>
      <div className="LocalPage">
        <p>{PagSelected}</p>
      </div>
      <header>
        <LogoHeader />
        <DetalDivHeader />
        <ConfigHeader />
        <DisplayMsg />
      </header>
    </>
  );
}
