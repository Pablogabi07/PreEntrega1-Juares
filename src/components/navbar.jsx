// src/components/navbar.jsx

import React from "react";
import "./navbar.css";
import CartWidget from "./cartwidget";

function Navbar() {
  return (
    <nav>
      <ul>
        <h1 className="brand">TermoFusión</h1>
        <li>
          <a href=".">Inicio</a>
        </li>
        <li>
          <a href=".">Productos</a>
        </li>

        <li>
          <a href=".">Contacto</a>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
