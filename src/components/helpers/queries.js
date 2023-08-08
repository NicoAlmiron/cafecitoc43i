//la funcion recibe de parametros un usuario con email y password
export const loguin = async(usuario) => {
    try {
        // pedir la lista dee usuariosa json-server
        const respuesta = await fetch('http://localhost:3004/usuarios');
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