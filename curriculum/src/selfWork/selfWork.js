import React from "react";
import "./selfWork.css"
import Constants, { cities, linkImg, linkKobe, linkNsd } from "./constants";

function SelfWork() {
    
    return(
 <div>
      <div>
        <label for="name">Name</label>
        <input id="name"></input>
      </div>

      <div>
        <h1>Liga de Futbol</h1>
          <ol start="10" type="a">
            <li>Real</li>
            <li>Elche</li>
            <li>Espanyol</li>
          </ol>
      </div>

      <div>
          <h2>Liga desordenada</h2>
          <ul start="10" type="a">
            <li>Real</li>
            <li>Elche</li>
            <li>Espanyol</li>
          </ul>
      </div>
      <div>
          <img src={linkKobe} alt="Kobe" width="300px" height="300px"/>
      </div>

      <div>
          <a href={linkNsd}>Visita Nsd</a>
      </div>

      <div>
        <a href={linkNsd} target="_blank">
            <img src={linkKobe} alt="Kobe"/>
        </a>
      </div>

      <div>
          <label>Password</label>
          <input type="password" placeholder="password"/>
      </div>
      <div>
          <input type="button" value="boton"/>
      </div>
      <div>
          <input type="submit" value="registrame"/>
      </div>
      <div>
          <label>sexo</label>
          <select name="sexo">
              <option>Man</option>
              <option>Woman</option>
          </select>
      </div>

      <div>
          <label>ciudad:</label>
          <select>
              {cities.map(city =><option> {city}</option>)}
          </select>
      </div>


</div>
    )
}


export default SelfWork;