/**
 * Created by USRDEL on 3/6/17.
 */
var UsuarioClass = (function () {
    /*
        public nombre:string;
        private apellido:string;
    */
    function UsuarioClass(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        /*
                this.nombre = nombre;
                this.apellido = apellido;
                */
    }
    UsuarioClass.prototype.ImprimirNombre = function (saludo, titulo) {
        return "\n            " + saludo + " , " + titulo + " \n            " + this.nombre + " " + this.apellido + "\n            ";
    };
    return UsuarioClass;
}());
var adrian = new UsuarioClass("Adrian", "Eguez");
console.log(adrian.ImprimirNombre("Hi", "Sr."));
