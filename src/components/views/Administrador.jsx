import { Table, Button } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { Link } from "react-router-dom";
import { listarProductos } from "../helpers/queries";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const Administrador = () => {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    listarProductos()
      .then((res) => {
        if (res) {
          // actualizar el estado
          setListaProductos(res);
        }
      })
      .catch((error) => {
        Swal.fire(
          "ocurrio un error: " + error.message,
          "la emos pifiado, venite mas tarde",
          "error"
        );
      });
  }, []);

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link to={"/administrador/crearProducto"} className="btn btn-primary">
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map((producto) => (
            <ItemProducto
              key={producto._id}
              producto={producto}
              setListaProductos={setListaProductos}
            ></ItemProducto>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
