import React from "react";
import { Link } from "react-router-dom";

import "./ConfigHeader.css";

import ProfileHeader from "./ProfileHeader/ProfileHeader";
import MenuHeader from "./MenuHeader/MenuHeader";

export default function ConfigHeader() {
  const teste = true;
  if (teste) {
    return (
      <div className="ConfigHeader">
        <ProfileHeader />
        <MenuHeader />
      </div>
    );
  }
  return (
    <div>
      <Link to="/Login">
        <button className="btnEntrar">ENTRAR</button>
      </Link>
    </div>
  );
}
