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
            <Link className="linkNav" to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link className="linkNav" to="/Feed">
              <p>Feed</p>
            </Link>
          </li>
          <li>
            <Link className="linkNav" to="/Login">
              <p>Perfil</p>
            </Link>
          </li>
          <li>
            <Link className="linkNav" to="/Register">
              <p>Desconectar</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
