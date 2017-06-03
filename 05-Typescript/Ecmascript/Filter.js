/**
 * Created by USRDEL on 3/6/17.
 */
//FILTER
var arreglo = [
    {
        nombre: "Adrian",
        apellido: "Eguez",
        nota: 10,
        id: 1
    },
    {
        nombre: "Vicente",
        apellido: "Bermudez",
        nota: 6,
        id: 2
    },
    {
        nombre: "Adrian",
        apellido: "Bermudez",
        nota: 8,
        id: 3
    },
    {
        nombre: "Felipe",
        apellido: "Cajas",
        nota: 6.5,
        id: 4
    },
    {
        nombre: "Carlos",
        apellido: "Estevez",
        nota: 9,
        id: 5
    }
];
var resultado = arreglo.filter(function (valor, indice, arreglo) {
    return valor.nota < 7;
});
console.log(resultado);
