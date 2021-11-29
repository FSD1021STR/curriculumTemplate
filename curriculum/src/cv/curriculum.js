import React from "react";
import "./curriculum.css";
import ProSerg from "./ProSerg.jpg"; 
import HTML from "./html.png";
import CSS from "./css1.png"
import JS from "./JS.png";
import Icons from "./icos.js";

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
          <li>Guadalajara, Spain. 19005</li>
          <li>Tlf: +34 643125085</li>
          <li>e-mail: sergioradigales@gmail.com</li>
          <li><a href="https://www.linkedin.com/in/sergioradigales/">LinkedInd https://www.linkedin.com/in/sergioradigales/</a></li>
         
        </ul>
        </div>
        <div >
         <img className="proSerg"  src={ProSerg}/>
        </div>
        
        
      </div>

      <div className="academicTraining">
        <div className="acTitleFlex">
        <div className="acTitle">
           <h2>Academic Training</h2>
        </div>
        </div>
        <div className="nsd">
          <h2>Full Stack Development Master (Bootcamp)</h2>
          <h3>Nuclio Digital School</h3>
          <div className="ssubjets">
          <h3>Subjets</h3>
          </div>
          <div className="subjets">
            <div className="front end">
              <h3>Front End</h3>
              <div>
                <ul className="frontList">
                  <li><Icons tech="HTML" icon={HTML}/></li>
                  <li><Icons tech="CSS" icon={CSS}/></li>
                  <li><Icons tech="JavaScript" icon={JS}/> </li>
                  <li><Icons/></li>
                </ul>
              </div>

            </div>
            <div className="Back End">
              <h3>Back End</h3>
                <div>
                  <ul>
                    <li>MySql</li>
                    <li>MongoDB </li>
                    <li>Oracle </li>
                  </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

