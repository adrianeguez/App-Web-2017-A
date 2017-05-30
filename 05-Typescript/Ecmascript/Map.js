/**
 * Created by USRDEL on 29/5/17.
 */
var arreglo = [4, 6, 7, 4, 5, 8, 10, 4, 7];
// Me devuelve un arreglo
var resultado = arreglo.map(function (valor, indice, arreglo) {
    return (valor * 2) / 10;
});
console.log(resultado);
