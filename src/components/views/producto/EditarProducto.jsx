import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { editarProducto, obtenerProductito } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarProducto = () => {
  const { id } = useParams();
  Swal;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  useEffect(() => {
    obtenerProductito(id)
      .then((resp) => {
        if (resp) {
          setValue("nombreProducto", resp.nombreProducto);
          setValue("precio", resp.precio);
          setValue("imagen", resp.imagen);
          setValue("categoria", resp.categoria);
          setValue("descripcion", resp.descripcion);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const onSubmit = (producto) => {
    editarProducto(id, producto)
      .then((respuesta) => {
        if (respuesta.status === 200) {
          Swal.fire("todo ok!", "el producto fue editado con exito", "success");
          // detalleProducto("/detalleProducto"); esto me lleva a la pagina del producto
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "algo flota!",
          "hubo un error al editar el producto",
          "error"
        );
      });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      <Form className="pb-3" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "el nombre es un dato obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar por lo menos dos caracteres",
              },
              maxLength: {
                value: 32,
                message: "El maximo permitido es de 32 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "el Precio es un dato obligatorio",
              minLength: {
                value: 2,
                message: "el precio minimo es de $10",
              },
              maxLength: {
                value: 5,
                message: "exediste el maximo!, $99.999 es el precio maximo",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen es un dato obligatorio",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "debe ingresar una dirección URL valida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "debe seleccionar alguna categoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("descripcion", {
              required: "La descripcion es un dato obligatorio",
              minLength: {
                value: 10,
                message:
                  "Debe ingresar por lo menos 10 caracteres de descripcion",
              },
              maxLength: {
                value: 350,
                message: "Exediste el limite de 350 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarProducto;
