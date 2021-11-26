import React from "react";
import "./form.css";
export default function Formulario() {
  return (
    <div>
      <h1> Nuevo Usuario </h1>
      <form>
        <label>Nombre de usuario: </label>
        <input placeholder="nombre de usuario" />
        <br/>
        <label>Contraseña: </label>
        <input type="password" placeholder="password" />
        <br/>
        <label>Repite la contraseña: </label>
        <input type="password" placeholder="password" />
        <br/>
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}
