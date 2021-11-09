console.log("Clase 7 Json");

let str = '{"id": 1, nombre: "Mariano"}'
let obj = {id: 1, nombre: 'Mario'}
document.write("<p>"+obj+"</p>");

console.log(str);
console.log(obj);

//Proceso de conversion de string a objeto
console.log(JSON.parse(str));
console.log(JSON.stringify(obj));

/////////////////////////////////////////////////////////
log(enJSON); // {"id":2,"producto":"Arroz"}
console.log(typeof producto1); // object
console.log(typeof enJSON); // string
localStorage.setItem("producto1", enJSON);
// Se guarda {"id":2,"producto":"Arroz"}

const enJSON = '{"id":2,"producto":"Arroz"}';
const producto1 = JSON.parse(enJSON);
console.log(typeof enJSON); // string
console.log(typeof producto1); // object
console.log(producto1.producto); // Arroz
const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log(producto2.id); // 2

//Ejemplo Aplicado
const productos = [{ id: 1, producto: "Arroz", precio: 125 },
{ id: 2, producto: "Fideo", precio: 70 },
{ id: 3, producto: "Pan" , precio: 50},
{ id: 4, producto: "Flan" , precio: 100}];
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
for (const producto of productos) {
guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));