console.log("Clase 8 DOM");

let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML);

/*let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);*/

/*let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);*/

//Ejemplo Aplicado
let paises = document.getElementsByClassName("paises");
let contenedores = document.getElementsByTagName("div");
for (const pais of paises) {
console.log(pais.innerHTML);
}
for (const div of contenedores) {
console.log(div.innerHTML);
}
