/**
 * Created by USRDEL on 3/6/17.
 */

// nombreVariable:tipoVariable

let numero:number = 2;

// numero = "Adrian"; //No se puede guardar tipos de dato string en numbers
numero = 18;

let verdad:boolean = true;

// verdad = 0;// No podemos igualar a un elemento que no sea un booleano

verdad = null;

verdad = undefined;

verdad = false;

let nombre:string = "Adrian";

nombre = `Yo no soy ${verdad}`;

let arregloNumeros1:number[] = [1,2];

let arregloNumeros2:Array <number> = [1,2];

interface UsuarioInt{
    nombre:string,
    apellido:string,
    nota?:number,
    id:number
}
let adrian:UsuarioInt = {
    nombre:"Adrian",
    apellido:"Eguez",
    id:21
};


var juego = {};
juego = 2;
juego = "string";

let juego = 2;
//juego = "Nombre"; //Error
//juego = {}; // Error

let juego:any = 2;
juego = "Nombre";
juego = {};

const amigo = "Amigo";
const numero = 2;

//numero = 25;

//amigo = "Referendum";



