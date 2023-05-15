import { Link, useNavigate } from "react-router-dom";
import ContextToken from "../../../../Context/ContextToken";

import "./MenuHeader.css";
import { useContext, useEffect, useState } from "react";
import ContextUser from "../../../../Context/ContextUser";

export default function MenuHeader() {
  const [TokenUser, SetTokenUser] = useContext(ContextToken);
  const [UserData, SetUserData] = useContext(ContextUser);

  const [userRouterName, SetUserRouterName] = useState();

  const navigate = useNavigate();

  let userString = localStorage.getItem("userData");
  let userObj = JSON.parse(userString);

  useEffect(() => {
    SetUserRouterName(UserData.user);
  });

  function ifUser() {
    if (UserData) {
      return UserData.user;
    } else {
      return userObj.user;
    }
  }

  const Logout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    SetTokenUser(undefined);
    return navigate("/");
  };

  return (
    <nav>
      <div className="iconMenuHeader">
        <div></div>
        <div></div>
        <div></div>
        <ul className="navHeader">
          <li>
            <Link className="linkNav" to={`/`}>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link className="linkNav" to={`${ifUser()}/Feed`}>
              <p>Feed</p>
            </Link>
          </li>
          <li>
            <Link className="linkNav" to={`${ifUser()}/Profile`}>
              <p>Perfil</p>
            </Link>
          </li>
          <li onClick={Logout}>
            <p>Desconectar</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
