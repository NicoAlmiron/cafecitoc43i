const uriUsuario =
    import.meta.env.VITE_API_USUARIO;
const uriProductos =
    import.meta.env.VITE_API_PRODUCTO;
//la funcion recibe de parametros un usuario con email y password
export const loguin = async(usuario) => {
    try {
        // pedir la lista dee usuariosa json-server
        const respuesta = await fetch(uriUsuario);
        const listaUsuarios = await respuesta.json();
        //buscar si el usuario que completo el formulario esta dentro de la lista de json-server
        const usuarioABuscar = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email)
            //(si no existe, el find() devuelve -1)
        if (usuarioABuscar) {
            //si encontre el usuario y su password es correcto, esta todo ok,
            if (usuarioABuscar.password === usuario.password) {
                console.log('Usuario validado con exito!');
                return usuarioABuscar;
            } else {
                console.log('los datos ingresados son incorrectos, por favor verifique sus datos');
                return null;
            }
        } else {
            //caso contrario tendria que decir que salio todo mal
            console.log('los datos ingresados son incorrectos, por favor verifique sus datos.');
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

// peticiones o solicitudes a la api
// peticion GET devuelve un listado de elementos o un elemento 
// peticion POST, crear un elemento nuevo. (Login)
// peticion PUT, modifica todos los valores de un elemento
// peticion PATCH, modifica algun valor de un elemento
// peticion DELETE, eliminar/borrar un elemento

export const listarProductos = async() => {
    try {
        const respuesta = await fetch(uriProductos)
        console.log(respuesta);
        const listaProductos = await respuesta.json()
        return listaProductos;
    } catch (error) {
        console.log(error);
        return null;
    }
}