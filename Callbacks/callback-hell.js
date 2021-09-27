

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

const id = 10;


const getEmpleado = ( id, callback ) => {
    
    const empleado = empleados.find( (e) => e.id === id)?.nombre;

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }


}

const getSalario = (id, callback) => {

    const salario = salarios.find((s) => s.id === id)?.salario;
if (salario) {
    callback(null, salario);
} else {
    callback(`El salario para el empleado con id ${id} no existe`)
}


}


getEmpleado( id, (err, empleado) => {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log('Empleado Existe!');
        console.log(empleado);
    }
});

getSalario(id, (err, salario) =>{
    if (err) {
        console.log('ERROR');
        console.log(err);
        
    } else {
        
        console.log(`El Salario para el Id ${id} es : ${salario}`);
    }
})
