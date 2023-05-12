import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterBody.css";
import axios from "axios";
import ContextToken from "../../../Context/ContextToken";

export default function RegisterBody() {
  const [User, setUser] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const [dataRegister, setDataRegister] = useState();
  const [TokenUser, SetTokenUser] = useContext(ContextToken);

  const navigate = useNavigate();

  const UserLogin = (event) => {
    setUser(event.target.value);
  };
  const EmailLogin = (event) => {
    setEmail(event.target.value);
  };
  const PasswordLogin = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    setDataRegister({
      user: User,
      email: Email,
      password: Password,
    });
  }, [User, Email, Password]);

  const ReqRegister = async (event) => {
    event.preventDefault();

    await axios
      .post(
        "https://api-login-token-sistem-jwt.vercel.app/RegisterUser",
        dataRegister
      )
      .then((response) => {
        localStorage.setItem("userData", JSON.stringify(response.data[1]));

        localStorage.setItem("token", response.data[0].token);
        SetTokenUser(response.data[0].token);

        let userString = localStorage.getItem("userData");
        let userObj = JSON.parse(userString);

        return navigate(`/`);
      })
      .catch((error) => {
        console.log(error);
      });
    //Post para Register
  };

  return (
    <div className="RegisterBody">
      <form>
        <input
          type="text"
          placeholder="Usuario"
          required
          onChange={UserLogin}
        ></input>
        <input
          type="text"
          placeholder="Email"
          required
          onChange={EmailLogin}
        ></input>
        <input
          type="text"
          placeholder="Sua Senha"
          required
          onChange={PasswordLogin}
        ></input>
        <button onClick={ReqRegister}>Cadastrar</button>
      </form>
    </div>
  );
}
