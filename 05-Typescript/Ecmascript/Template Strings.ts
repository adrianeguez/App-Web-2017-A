/**
 * Created by USRDEL on 29/5/17.
 */

var a = 1;

let a1 = 1;

let nombreUsuario = "Adrian Eguez";


let html = "<h1>HOLA</h1>"+
        "<p>Hola amigos"+nombreUsuario+"</p>"+
        "<img src='algunUrl'>"+
        "<a href='google'>Ir a google</a>";



let htmlConTemplateStrings =`
<h1>asdasd</h1>
<p>${nombreUsuario}</p>
`;

console.log(htmlConTemplateStrings);