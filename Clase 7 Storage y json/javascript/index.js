console.log("Clase 7 Storage y json");

localStorage.setItem("nombre", "logan");
localStorage.setItem("nombre", "robert");
localStorage.setItem("nombre", "pedro");
//Guarda el ultimo nombre ingrsado

localStorage.setItem("bienvenido", "!Hola¡");
localStorage.setItem("esValido", true );
localStorage.setItem("numero", 23);

let mensaje = localStorage.getItem("bienvenido");
let bandera = localStorage.getItem("esValido");
let numero = localStorage.getItem("numero");

sessionStorage.setItem("seleccionado", [1,2,3,4]);
sessionStorage.setItem("esValido", false);
sessionStorage.setItem("email", "info@fake.com");

let lista = sessionStorage.getItem("seleccionado").split(",");
console.log(lista);
let listaDos = sessionStorage.getItem("esValido") =="true";
console.log(typeof listaDos);

localStorage.numeroPrueba = 10;
document.write(localStorage.numeroPrueba);

let clave = "otracosa";
localStorage[clave] = "hola";

for (let i=0; i<localStorage.length; i+=1){
    let code = localStorage.key(i)
    document.write("<p> code "+ code +"</p>");
    document.write("<p> valor "+ localStorage.getItem(clave) +"</p>");
}

//Sacar elementos
localStorage.removeItem("bienvenido");
localStorage.clear();
sessionStorage.clear();

//Ejemplo Aplicado
const multiplicar = (a, b) => a * b;
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición calculamos el número ingresado por el número de repetición (i)
for (let i = 1; i <= 10; i++) {
guardarLocal(i,multiplicar( parseInt(ingresarNumero),i));
}




