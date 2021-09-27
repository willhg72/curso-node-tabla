

/* setTimeout(() => {
    console.log(`Hola Mundo`);
}, 1000);
 */

const getUsuarioById = (id, callback) => {

    const user = {
        id,
        nombre: 'William'
    }

    setTimeout( ( ) => {
        callback(user);    
    },1500);
}

getUsuarioById(10, ( reciboUsuario ) => {
    console.log(reciboUsuario.id);
    console.log(reciboUsuario.nombre.toUpperCase());
});