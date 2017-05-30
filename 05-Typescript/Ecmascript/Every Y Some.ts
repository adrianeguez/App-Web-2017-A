/**
 * Created by USRDEL on 29/5/17.
 */
/**
 * Created by USRDEL on 29/5/17.
 */
let arreglo = [2,8,9,6,7,10,10,6,9];
// Me devuelve un arreglo

let resultado = arreglo
    .map(
    (valor,indice,arreglo)=>{

        return (valor*2)/10;
    })
    .some(
        (valor)=>{
            return valor<=0.2;
        }
    );

console.log(resultado); // false





// AND - Todos cumplen verdadero sino falso

let resultado2 = arreglo.every(
    (valor,indice,arreglo)=>{
        return (valor>=7);
    }
);

// OR - Si alguno es verdadero entonces devuelvo true

let resultado3 = arreglo.some(
    (valor,indice,arreglo)=>{
        return (valor<2);
    }
);

console.log(resultado3); //false











