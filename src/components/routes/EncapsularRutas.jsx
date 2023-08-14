import React from "react";
import { Navigate } from "react-router-dom";

const EncapsularRutas = ({ children }) => {
  // aqui agrego la logica que deben cumplir quienes van a observar las paginas de admin

  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || null;

  // preguntar si esta vacio ese usuario loguado
  if (!usuarioLogueado) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    //si esta todo bien
    return children;
  }
};

export default EncapsularRutas;
