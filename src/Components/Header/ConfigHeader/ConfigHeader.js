import React from "react";
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
      <button className="btnEntrar">ENTRAR</button>
    </div>
  );
}
