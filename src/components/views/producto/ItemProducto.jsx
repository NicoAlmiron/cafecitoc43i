import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ItemProducto = () => {
  const editar = useNavigate();
  return (
    <tr>
      {/* <td>{props.producto._id}</td> */}
      <td>1</td>
      <td>MOCHACCINO CANELA</td>
      <td>$1.740,00</td>
      <td>
        https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
      </td>
      <td>Café</td>
      <td>
        <Link
          onClick={editar("/administrador/editarProducto")}
          className="btn btn-warning"
        >
          Editar
        </Link>

        <Button variant="danger">Borrar</Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
