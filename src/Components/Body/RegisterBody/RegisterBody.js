import React, { useState } from "react";
import "./RegisterBody.css";

export default function RegisterBody() {
  const [User, setUser] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const [dataLogin, setDataLogin] = useState();

  return (
    <div className="RegisterBody">
      <form>
        <input type="text" placeholder="Usuario" required onChange={""}></input>
        <input type="text" placeholder="Email" required onChange={""}></input>
        <input
          type="text"
          placeholder="Sua Senha"
          required
          onChange={""}
        ></input>
        <button onClick={""}>Cadastrar</button>
      </form>
    </div>
  );
}
