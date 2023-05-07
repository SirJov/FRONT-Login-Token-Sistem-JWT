import { useState } from "react";
import { Link } from "react-router-dom";

import "./LoginBody.css";

export default function LoguinBody() {
  const [User, setUser] = useState();
  const [Password, setPassword] = useState();

  const [dataLogin, setDataLogin] = useState();

  const UserLogin = (event) => {
    setUser(event.target.value);
    setador();
  };
  const PasswordLogin = (event) => {
    setPassword(event.target.value);
    setador();
  };

  function setador() {
    setDataLogin({
      email: User,
      password: Password,
    });
  }

  const ReqLoguin = (event) => {
    event.preventDefault();

    console.log(dataLogin);
  };

  return (
    <div className="LoginBody">
      <form>
        <input
          type="text"
          placeholder="Email"
          required
          onChange={UserLogin}
        ></input>
        <input
          type="text"
          placeholder="Sua Senha"
          required
          onChange={PasswordLogin}
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
