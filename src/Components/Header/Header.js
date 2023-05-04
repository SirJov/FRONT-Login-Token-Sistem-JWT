import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <div>
        <h1>
          LITTLE<span className="spanLogo">face</span>
        </h1>
      </div>
      <div>
        <div className="boxEfect1"></div>
        <div className="boxEfect2"></div>
        <div className="boxEfect3"></div>
      </div>
      <div>
        <button className="btnEntrar">ENTRAR</button>
      </div>
    </header>
  );
}
