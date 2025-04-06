import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__titulo">Todo Lista</h1>
      <button className="header__boton">No mostrar tareas completadas</button>
    </header>
  );
};
