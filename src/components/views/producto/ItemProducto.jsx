import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProductoAPI, listarProductos } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemProducto = ({ producto, setListaProductos }) => {
  const borrarProducto = (producto) => {
    Swal.fire({
      title: "Quiere eliminar " + producto.nombreProducto + "?",
      text: "esta accion es permanente y no se podra revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "error",
      cancelButtonColor: "success",
      confirmButtonText: "Si, quiero eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Eliminado!",
          "El producto fue eliminado con exito",
          "success"
        );
        borrarProductoAPI(producto._id);
      }
    });
  };

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
          onClick={() => {
            borrarProducto(producto);
          }}
        >
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
