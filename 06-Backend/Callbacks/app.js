/**
 * Created by USRDEL on 3/6/17.
 */

const fs = require('fs');

console.log("Empieza");

// CALLBACK
//
//
//
//


fs.readFile('texto.txt', 'utf8',
    (err, data) => {
        if (err) throw err;
        console.log(data);
    });

console.log("Termina");




// npm install twj-a-eguez

/*
 const calculadora = require('twj-a-eguez');

 let a = 2,
 b = 3,
 resultado;

 resultado = calculadora.calculadoraUdla.sumar(a, b);

 console.log(`Resultado es: ${resultado}`);

 let passswordAEncriptar = "1234";

 calculadora.calculadoraUdla.passwords.encryptPassword(
 {
 password: passswordAEncriptar,
 })
 .exec({
 error: (error)=> {
 console.log(`Error: ${error}`);
 },
 success: (res)=> {
 console.log(`Resultado: ${res}`);

 },
 });




 // 1 - Nombre y ruta del archivo
 // 2 - Codificacion
 // 3 - Anonymous Function
 // (error!,contenido del archivo )

 */