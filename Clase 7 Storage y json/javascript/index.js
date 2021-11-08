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

