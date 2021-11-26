import React from "react";
import "./curriculum.css";

export default function Curriculum() {
  return (
    <div>
      <h1>Curriculum</h1>
      <hr />
      <div>
        <ol type="1">
          <li>
            <h3>Datos personales: </h3>
            <div>
              <ul>
                <li>
                  <p>Nombre: </p>
                  <p>Jaume</p>
                </li>
                <li>
                  <p>Apellidos: </p>
                  <p>Meskini Carbonell</p>
                </li>
                <li>
                  <label>Sexo</label>
                  <select>
                    <option>Hombre</option>
                    <option>Mujer</option>
                  </select>
                </li>
                <li>
                  <p>telefono</p>
                  <p>636515457</p>
                </li>
                <li>
                  <p>email: </p>
                  <p>jmeskini@gmail.com</p>
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
