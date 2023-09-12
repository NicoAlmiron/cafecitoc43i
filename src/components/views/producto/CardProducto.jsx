import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src={producto.imagen}
          alt={producto.nombreProducto}
        />
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>${producto.precio}</Card.Text>
          <Link to={"/detalleProducto"} className="btn btn-outline-primary">
            Ver detalle
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
