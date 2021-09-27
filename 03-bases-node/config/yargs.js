

const { options } = require('yargs');
const argv = require('yargs')
.options('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'

})
.options('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'

})
.check( (argv, options) => {
    if (isNaN(argv.b)) {
        throw 'La base tiene que ser un número'
    }
    return true
    if (!argv.l)
        return true
})
.options('h',{
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    default: 10,
    describe: 'Limite superior de la tabla de multiplicar'
})
.argv;


module.exports = argv;


