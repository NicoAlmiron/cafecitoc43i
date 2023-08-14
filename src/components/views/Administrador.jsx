import { Table, Button } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { Link, useNavigate } from "react-router-dom";

const Administrador = () => {
  const agregar = useNavigate();
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link
          onClick={agregar("/administrador/crearProducto")}
          className="btn btn-primary"
        >
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <ItemProducto></ItemProducto>
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
