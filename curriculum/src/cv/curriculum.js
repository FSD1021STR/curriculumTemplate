import React from "react";
import "./curriculum.css";
import ProSerg from "./ProSerg.jpg";

export default function Curriculum() {
  return (
    <div className="whole">
      <div className="cv">
        <h1>Curriculum</h1> 
      </div>
      <hr/>
      <div className="personalInfo">
        <div>
        <h2>Datos Personales</h2>
        <ul>
          <li>Sergio Radigales</li>
          <li>26/Febrero/1993</li>
         
        </ul>
        </div>
        <div >
         <img className="proSerg"  src={ProSerg}/>
        </div>
        
        
      </div>
    </div>
  );
}

