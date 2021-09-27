


const empleados = [
    {
        id: 1,
        nombre: 'William'
    },
    {
        id: 2,
        nombre: 'Heidy'
    },
    {
        id: 3,
        nombre: 'Waleska'
    }
];


const salarios = [
    {
        id: 1,
        salario: 1600
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id ) => {
    
    return promesa = new Promise ( ( resolve, reject ) => {
 
        const empleado = empleados.find( (e) => e.id === id)?.nombre;
 
        ( empleado ) 
            ? resolve( empleado )    
            : reject(`El empleado con el id: ${id} no existe`);
    });
 
}

const getSalario = ( id ) => {

    return  promesa = new Promise ( ( resolve, reject) => {

        const salario = salarios.find((s) => s.id === id)?.salario;
    ( salario )
        ? resolve( salario ) 
        : reject(`El salario para el empleado con id ${id} no existe`); 
    });

}




const id = 3;
/* 
getEmpleado( id )
    .then( empleado => console.log(`El empleado es ${empleado}` ))
    .catch(err => console.log(err));
    
getSalario( id )
    .then (salario => console.log(`Y su salario es ${salario}`))    
    .catch(err => console.log(err));
             */

/* getEmpleado( id )
    .then (empleado => {
        getSalario(id)
            .then( salario => {
                console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err));
 */


let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario(id);
    })    
    .then(salario => console.log('El empleado ',nombre, 'tiene el salario de',salario))
    .catch(err => console.log(err));
