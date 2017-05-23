/**
 * Created by USRDEL on 22/5/17.
 */

//VOID - undefined
function ImprimirHolaMundo() {
        console.log("Hola Mundo");
}

ImprimirHolaMundo(); //undefined

//VOID - undefined
function Imprimir(texto){
    console.log(texto);
}

Imprimir("Adrian"); //undefined

function Suma2Numeros(a,b) {
    return a+b;
}

var resultado = Suma2Numeros(1,2); // 3

console.log(resultado); // I:3
console.log(Suma2Numeros(1,2)); //I:3

function Operar2Numeros(n1,n2,funcion){

    n1 = n1+1;
    n2 = n2+2;

    funcion(n1,n2);
}

Operar2Numeros(2,4, function (primerNumero,segundoNumero) {
    //primerNumero = 3
    //segundoNumero = 6

    return primerNumero*segundoNumero; //3 * 6 = 18;

})


//FOREACH


// [1,2,3,4].forEach(function(valorIteracion,Indice,Arreglo){
//
//  console.log(valorIteracion) //
//
// })











