import { Link, useNavigate } from "react-router-dom";
import ContextToken from "../../../../Context/ContextToken";

import "./MenuHeader.css";
import { useContext, useEffect, useState } from "react";
import ContextUser from "../../../../Context/ContextUser";

export default function MenuHeader() {
  const [SetTokenUser] = useContext(ContextToken);
  const [UserData] = useContext(ContextUser);

  const [buttonClicked, SetButtonClicked] = useState(false);
  const [classBtn, setCassBtn] = useState({});

  useEffect(() => {
    if (buttonClicked === false) {
      setCassBtn({
        iconMenuHeader: "iconMenuHeader",
        navHeader: "navHeader",
      });
    } else {
      setCassBtn({
        iconMenuHeader: "iconMenuHeaderClicked",
        navHeader: "navHeaderVisible",
      });
    }
  }, [buttonClicked]);

  const navigate = useNavigate();

  let userString = localStorage.getItem("userData");
  let userObj = JSON.parse(userString);

  const alterState = () => {
    SetButtonClicked(!buttonClicked);
  };

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
      <div className={classBtn.iconMenuHeader} onClick={alterState}>
        <div></div>
        <div></div>
        <div></div>
        <ul className={classBtn.navHeader}>
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
