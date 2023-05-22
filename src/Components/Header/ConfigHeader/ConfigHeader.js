import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "./ConfigHeader.css";

import ProfileHeader from "./ProfileHeader/ProfileHeader";
import MenuHeader from "./MenuHeader/MenuHeader";

import ContextToken from "../../../Context/ContextToken";
import ContextUser from "../../../Context/ContextUser";

export default function ConfigHeader() {
  const [TokenUser] = useContext(ContextToken);
  const [UserData] = useContext(ContextUser);
  const [url, SetUrl] = useState();

  if (TokenUser) {
    if (UserData) {
      return (
        <div className="ConfigHeader">
          <ProfileHeader />
          <MenuHeader />
        </div>
      );
    }
  }
  return (
    <div>
      <Link to="/Login">
        <button className="btnEntrar">ENTRAR</button>
      </Link>
    </div>
  );
}
