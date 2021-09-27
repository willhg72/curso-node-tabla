


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


const getInfoUsuario = async( id ) => {
   
    try {
    
        const empleado = await getEmpleado( id );
        const salario = await getSalario( id ); 
    
        return `El empleado ${empleado} tiene un salario de ${salario}`;
        
    } catch (error) {
        return error;    
    }


}

const id = 10;

getInfoUsuario( id )
    .then( msg => console.log(msg) )
    .catch(err => console.log(err));
