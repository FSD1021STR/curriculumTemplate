import React from "react";
import "./curriculum.css";
import logo from "./logo.svg";

export default function Curriculum() {
  return (
    <div>
      <div className="header">
        <img src={logo} width="250px" />
        <h1>Curriculum</h1>
      </div>
      <div>
        <h3>Datos Personales</h3>
        <hr />
        <span>Nombre:</span>
        <span className="values">Manuel</span>
        <br />
      </div>
    </div>
  );
}
