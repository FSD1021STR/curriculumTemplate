import React from "react";
import "./curriculum.css";
import logo from "./logo.svg";

export default function Curriculum() {
  return (
    <div>
      <div className="header">
        <img src ={logo} width="50px" />
        <h1>Curriculum</h1>
      </div> 
      <div>
        <h3>Datos perosonales:</h3>
        <hr />
        <span>Nombre:</span>
        <span className ="values">Alfonso</span>
        <br />
        <span>Apellido:</span>
        <span className ="values">Fernández</span>
        <br />
      </div> 
    </div>
  );
}
