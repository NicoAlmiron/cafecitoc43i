import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProductoAPI } from "../../helpers/queries";

const ItemProducto = ({ producto }) => {
  return (
    <tr>
      <td>{producto._id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>{producto.imagen}</td>
      <td>{producto.categoria}</td>
      <td>
        <Link
          to={`/administrador/editarProducto/${producto._id}`}
          className="btn btn-warning"
        >
          Editar
        </Link>
        <Button
          variant="danger"
          className="mt-1"
          onClick={() => borrarProductoAPI(producto._id)}
        >
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
