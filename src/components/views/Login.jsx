import { Form, Button, Container, Card } from "react-bootstrap";
import { set, useForm } from "react-hook-form";
import { login } from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = ({ setUsuarioActivo }) => {
  const redireccionAdmin = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //esta es mi funcion, la que pide logear al usuario
  const onSubmit = (usuario) => {
    console.log(usuario.email);
    console.log(usuario.password);
    login(usuario).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Bienvenido " + respuesta.usuario + "!",
          "iniciaste sesion con exito!",
          "success"
        );
        //guardar el usuario en el localStorague o sesionStorague (no se guarda la contraseña, en este caso se hace la exepcion)
        sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
        setUsuarioActivo(respuesta);
        redireccionAdmin("/administrador");
      } else {
        Swal.fire(
          "ocurrio un error!",
          "Email y/o Password incorrecto",
          "error"
        );
      }
    });
  };

  // ExpRegularContraseña: ^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$
  // ExpRegMail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

  return (
    <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h5">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "El Email es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El email ingresado debe cumplir con las especificaciones, por ej: email@email.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                {...register("password", {
                  required: "El password es obligatoria",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "El password ingresada no cumple con las espesificaciones deseadas. (tener entre 8 y 16 caracteres, al menos una minuscula y una mayuscula)",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
