import React from "react";
import "./ProfileHeader.css";

export default function ProfileHeader() {
  const teste = true;
  if (!teste) {
    return (
      <div className="MenuHeader">
        <div className="ProfileHeader">
          <img />
          <p></p>
        </div>
        <nav>
          <div className="iconMenuHeader">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className="navHeader">
            <li>Perfil</li>
            <li>Desconectar</li>
          </ul>
        </nav>
      </div>
    );
  }
  return (
    <div>
      <button className="btnEntrar">ENTRAR</button>
    </div>
  );
}
