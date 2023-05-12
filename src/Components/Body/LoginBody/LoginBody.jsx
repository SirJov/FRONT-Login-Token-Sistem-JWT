import { Link, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

import ContextToken from "../../../Context/ContextToken";
import ContextUser from "../../../Context/ContextUser";

import "./LoginBody.css";

export default function LoguinBody() {
  const [User, setUser] = useState();
  const [Password, setPassword] = useState();

  const [dataLogin, setDataLogin] = useState();

  const [TokenUser, SetTokenUser] = useContext(ContextToken);
  const [UserData, SetUserData] = useContext(ContextUser);

  const navigate = useNavigate();

  useEffect(() => {
    setDataLogin({
      email: User,
      password: Password,
    });
  }, [User, Password]);

  const UserLogin = (event) => {
    setUser(event.target.value);
  };
  const PasswordLogin = (event) => {
    setPassword(event.target.value);
  };

  const ReqLoguin = async (event) => {
    event.preventDefault();

    await axios
      .post(
        "https://api-login-token-sistem-jwt.vercel.app/UserLogin",
        dataLogin
      )
      .then((response) => {
        if (response.data[1]) {
          localStorage.setItem("userData", JSON.stringify(response.data[1]));

          localStorage.setItem("token", response.data[0].token);

          SetTokenUser(response.data[0].token);

          //let userString = localStorage.getItem("userData");
          //let userObj = JSON.parse(userString);

          return navigate(`/`);
        }
        return console.log("dados incorretos");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="LoginBody">
      <form>
        <input
          type="text"
          placeholder="Email"
          onChange={UserLogin}
          required
        ></input>
        <input
          type="text"
          placeholder="Sua Senha"
          onChange={PasswordLogin}
          required
        ></input>
        <button onClick={ReqLoguin}>Entrar</button>
      </form>
      <div>
        <p>Nao tem cadastro ?</p>
        <Link to="/Register">
          <button>Cadastro</button>
        </Link>
      </div>
    </div>
  );
}
