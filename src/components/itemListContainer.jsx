// src/components/itemlistcontainer.jsx

import React from "react";
import "./itemlistcontainer.css";

function ItemListContainer({ greeting }) {
  return (
    <div>
      <h1 className="titulo">Todo lo que busacas en TermoFusión</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default ItemListContainer;
