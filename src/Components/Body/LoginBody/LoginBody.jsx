import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./LoginBody.css";

export default function LoguinBody() {
  const [User, setUser] = useState();
  const [Password, setPassword] = useState();

  const [dataLogin, setDataLogin] = useState();

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

  const ReqLoguin = (event) => {
    event.preventDefault();
    const data = dataLogin;
    //aqui o post para logar
    console.log(data);
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
