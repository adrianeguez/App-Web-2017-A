/**
 * Created by USRDEL on 3/6/17.
 */


class UsuarioClass {
/*
    public nombre:string;
    private apellido:string;
*/
    constructor(
        public nombre:string,
        private apellido?:string){
/*
        this.nombre = nombre;
        this.apellido = apellido;
        */
    }

    ImprimirNombre(
        saludo:string,
        titulo?:string):string{

            return `
            ${saludo} , ${titulo} 
            ${this.nombre} ${this.apellido}
            `;
    }

}

let adrian:UsuarioClass = new UsuarioClass(
    "Adrian",
    "Eguez");

console.log(adrian.ImprimirNombre("Hi","Sr."));





