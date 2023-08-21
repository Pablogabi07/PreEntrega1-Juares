// src/components/cartwidget.jsx

import React from "react";
import "./cartwidget.css";
import Icon from "../image/pngwing.com.png";

function CartWidget() {
  return (
    <div className="cart-widget">
      <img className="icon" src={Icon} alt="Icono" />
      <span className="cart-notification">10</span>
    </div>
  );
}

export default CartWidget;
