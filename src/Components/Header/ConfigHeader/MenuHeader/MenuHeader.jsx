import { Link, useNavigate } from "react-router-dom";
import ContextToken from "../../../../Context/ContextToken";

import "./MenuHeader.css";
import { useContext } from "react";
import ContextUser from "../../../../Context/ContextUser";

export default function MenuHeader() {
  const [TokenUser, SetTokenUser] = useContext(ContextToken);
  const [UserData, SetUserData] = useContext(ContextUser);
  const navigate = useNavigate();
  let userString = localStorage.getItem("userData");
  let userObj = JSON.parse(userString);

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
            <Link className="linkNav" to={`/${userObj.user}/Feed`}>
              <p>Feed</p>
            </Link>
          </li>
          <li>
            <Link className="linkNav" to={`/${userObj.user}/Profile`}>
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
