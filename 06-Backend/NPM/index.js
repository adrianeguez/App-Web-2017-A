
// index.js

let Passwords = require('machinepack-passwords');

// Passwords SE IMPORTA TODO EL PAQUETE EN LA VARIABLE PASSWORDS

exports.calculadoraUdla = {
    sumar:(n1,n2)=>{
        return n1+n2;
    },
    restar:(n1,n2)=>{
        return n1-n2;
    },
    multiplicar:(n1,n2)=>{
        return n1*n2;
    },
    passwords:Passwords
};