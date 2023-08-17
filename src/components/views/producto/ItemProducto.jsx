import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemProducto = ({ producto }) => {
  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>{producto.imagen}</td>
      <td>{producto.categoria}</td>
      <td>
        <Link
          to={`/administrador/editarProducto/${producto.id}`}
          className="btn btn-warning"
        >
          Editar
        </Link>
        <Button variant="danger" className="mt-1">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
