import React from "react";
import { Route, Routes } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";

const RutasProtegidas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Administrador></Administrador>}></Route>
      <Route
        exact
        path="/crearProducto"
        element={<CrearProducto></CrearProducto>}
      ></Route>
      <Route
        exact
        path="/editarProducto/:id"
        element={<EditarProducto></EditarProducto>}
      ></Route>
    </Routes>
  );
};

export default RutasProtegidas;
