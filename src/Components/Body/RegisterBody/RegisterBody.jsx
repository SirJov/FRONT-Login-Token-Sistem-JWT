import { useState, useEffect } from "react";
import "./RegisterBody.css";

export default function RegisterBody() {
  const [User, setUser] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const [dataRegister, setDataRegister] = useState();

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

  const ReqRegister = (event) => {
    event.preventDefault();
    const data = dataRegister;
    //Post para Register
    console.log(data);
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
