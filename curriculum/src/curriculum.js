import React from "react";
import "./curriculum.css";
import logo from "./logo.svg";
export default function Curriculum() {
  return (
    <div>
      <div className="header">
        <img src={logo} width="50px" />
        <h1>Curriculum</h1>
      </div>
      <div>
        <h3>Datos personales:</h3>
        <hr />
        <span>Nombre:</span>
        <span className="values">Jaume</span>
        <br />
        <span>Apellido:</span>
        <span className="values">Meskini</span>
        <br />
      </div>
    </div>
  );
}
