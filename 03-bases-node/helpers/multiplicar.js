
const { rejects } = require('assert');
const fs = require('fs');
const { config } = require('process');

/* const crearArchivo = ( base ) => {

    return promesa = new Promise ( ( resolve, reject )  => {

        let salida = '';

        salida =  ('=====================\n');
        salida += (`Tabla del: ${ base } \n`);
        salida += ('=====================\n');

        for (let index = 1; index < 11; index++) {
            salida += `${base} x ${index} = ${base*index}\n`;
        }

        //console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        if (fs.readFileSync(`tabla-${base}.txt`,'utf-8').length > 0) {
            resolve(`tabla-${ base }.txt `);
        } else {
            reject(`El archivo no pudo ser creado`);
        }
    })
    
    
}; */



const crearArchivo = async( base, listar = false, hasta ) => {

    try {
        
        let salida = '';
    
        salida =  ('=====================\n');
        salida += (`Tabla del: ${ base } \n`);
        salida += ('=====================\n');
    
        for (let index = 1; index < hasta +1 ; index++) {
            salida += `${base} x ${index} = ${base*index}\n`;
        }
    

        fs.writeFileSync(`./03-bases-node/salida/tabla-${base}.txt`, salida);
        if (listar) {
            console.log(salida.rainbow);
        }
        return(`tabla-${ base }.txt `);
 
    } catch (err) {
        throw err       
    }


 
    
    
};


module.exports = {
    crearArchivo 
}