import { Navbar, Container, Nav, NavbarBrand, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Menu = ({ usuarioActivo }) => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <NavbarBrand as={Link} to={"/"}>
          Cafecito
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end to={"/"} className="nav-link">
              Inicio
            </NavLink>
            <NavLink end to={"/registro"} className="nav-link">
              Registro
            </NavLink>
            {usuarioActivo.email ? (
              <>
                <NavLink end to={"/administrador"} className="nav-link">
                  Administrador
                </NavLink>
                <Button variant="warning">Logout</Button>
              </>
            ) : (
              <>
                <NavLink end to={"/login"} className="nav-link">
                  Login
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
