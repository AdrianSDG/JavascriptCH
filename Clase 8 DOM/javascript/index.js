console.log("Clase 8 DOM");

/*let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML);*/

/*let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);*/

/*let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);*/

//Ejemplo Aplicado
/*let paises = document.getElementsByClassName("paises");
let contenedores = document.getElementsByTagName("div");
for (const pais of paises) {
console.log(pais.innerHTML);
}
for (const div of contenedores) {
console.log(div.innerHTML);
}*/
//////////////////////////////////////////////////////
//Insertar Elementos
// Crear nodo de tipo Elemento, etiqueta p
let paragraph = document.createElement("p");
// Insertar HTML interno
paragraph.innerHTML = "<h2>¡Hola Coder!</h2>";
// Añadir el nodo Element como hijo de body
document.body.appendChild(paragraph);

//Remover Elementos
let parrafo = document.getElementById("parrafo1");
//Elminando el propio elemento, referenciando al padre
parrafo.parentNode.removeChild(parrafo);
let paises = document.getElementsByClassName("paises");
//Eliminando el primer elemento de clase paises
paises[0].parentNode.removeChild(paises[0])

///////////////////////////////////////////////////////
//Obtener datos de Inputs
document.getElementById("nombre").value = "HOMERO";
document.getElementById("edad").value = 39;
