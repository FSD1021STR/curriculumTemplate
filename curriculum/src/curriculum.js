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
      <div className="body">
        <h3>Datos personales:</h3>
        <label>Nombre:</label>
        <label> Ruben</label>
        <br />
      </div>
    </div>
  );
}
