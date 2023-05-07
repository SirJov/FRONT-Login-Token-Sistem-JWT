import React from "react";

import "./MenuHeader.css";
import { Link } from "react-router-dom";

export default function MenuHeader() {
  return (
    <nav>
      <div className="iconMenuHeader">
        <div></div>
        <div></div>
        <div></div>
        <ul className="navHeader">
          <li>
            <Link></Link>
          </li>
          <li>Feed</li>
          <li>Perfil</li>
          <li>Desconectar</li>
        </ul>
      </div>
    </nav>
  );
}
