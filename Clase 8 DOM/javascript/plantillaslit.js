console.log("Clase 8 Plantillas Literales");

let lista = { id: 1, nombre : "Atun", precio : 145 };
let concatenado = "ID : " + lista.id +" - Producto: " + lista.nombre + "$ "+lista.precio;
let plantilla = `ID: ${lista.id } - Producto ${lista.nombre } $ ${lista.precio }`;
//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla);


let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${lista.id}</h3>
<p> Producto: ${lista.nombre}</p>
<b> $ ${lista.precio}</b>`;
//Agregamos el contenedor creado al body
document.body.appendChild(contenedor);

//Creando Elementos desde Objetos
const productos = [{ id: 1, nombre: "Arroz", precio: 125 },
{ id: 2, nombre: "Fideo", precio: 70 },
{ id: 3, nombre: "Pan" , precio: 50},
{ id: 4, nombre: "Flan" , precio: 100}];
for (const producto of productos) {
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
<p> Producto: ${producto.nombre}</p>
<b> $ ${producto.precio}</b>`;
document.body.appendChild(contenedor);
}

