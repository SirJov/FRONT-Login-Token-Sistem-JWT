import React from "react";

import "./MenuHeader";

export default function MenuHeader() {
  return (
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
  );
}
