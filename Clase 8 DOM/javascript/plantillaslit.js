console.log("Clase 8 Plantillas Literales");

let producto = { id: 1, nombre : "Arroz", precio : 125 };
let concatenado = "ID : " + producto.id +" - Producto: " + producto.nombre + "$ "+producto.precio;
let plantilla = `ID: ${producto.id } - Producto ${producto.nombre } $ ${producto.precio }`;
//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla);