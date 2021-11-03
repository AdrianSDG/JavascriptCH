console.log("Clase 6 METODOS");

const miArray = ["marca", 3 ,"palabra"];
console.log(miArray);
console.log( miArray.toString() ); 

miArray.push('otro elemento');
console.log(miArray.length); 
console.log(miArray);

const otroArray = ["elefante","tigre","pantera",33]
console.log(otroArray);
console.log(otroArray.join("---"));

const arrayCombo = miArray.concat(otroArray);
console.log(arrayCombo);

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
console.log(nombres);
const nombMasc = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3(sin contener la pos. 3)
console.log(nombMasc);

//Ejemplo Aplicado
//Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let cantidad = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
let entrada = prompt("Ingresar nombre");
listaNombres.push(entrada.toUpperCase());
console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));
///////////////////////////////////////

const carrito = [
    {nombre: "Monitor 17 pulgadas", precio: 600},
    {nombre: "Televisor", precio: 900},
    {nombre: "Tablet", precio: 500},
    {nombre: "Monitor Inco", precio: 890},
    {nombre: "Silla Gamer", precio: 1000},
];

const carArray = carrito.map(function(item) {
    return ("Articulo "+ item.nombre +" Precio "+ item.precio)
});

console.log(carrito);
console.log(carArray);
/////////////////////////////////////////////////////

//Metodo Find
const num = [1, 2, 3, 4, 5];
//La función parámetro generalmente es una función flecha sin cuerpo.
const encontrado = num.find(elemento => elemento > 3); //Encuentra 4
const names = ["Ana", "Ema", "Juan"];
const encontrado2 = names.find(elemento => elemento === "Ema"); //Encuentra "Ema"
const encontrado3 = names.find(elemento => elemento === "Alan");//undefined

//Metodo Filter
const filtro1 = num.filter(elemento => elemento > 3); //Encuentra [4,5]
const filtro2 = num.filter(elemento => elemento < 4); //Encuentra [1,2,3]
const names2 = ["Ana", "Ema", "Juan", "Elia"];
//Filtrar nombre que incluyen la letra "n" Encuentra ["Ana","Juan"]
const filtro3 = names2.filter(elemento => elemento.includes("n"));

//Metodo Map
const porDos = num.map(x => x * 2); // porDos = [2, 4, 6, 8, 10]
const masCien = num.map(x => x + 100); 
const names3 = ["Ana", "Ema", "Juan", "Elia"];
const lengths = names3.map(nombre => nombre.length);//lengths = [3, 3, 4, 4]

/////////////////////////
//Ejemplo aplicado a Metodos
const articulos = [{ id: 1, producto: "Arroz", precio: 125 },
{ id: 2, producto: "Fideo", precio: 70 },
{ id: 3, producto: "Pan" , precio: 50},
{ id: 4, producto: "Flan" , precio: 100}];
const buscarPan = articulos.find(producto => producto.id === 3);
console.log(buscarPan);//{id: 3, producto: "Pan", precio: 50}
const baratos = articulos.filter(producto => producto.precio < 100);
console.log(baratos);//[{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]
const aumentos = articulos.map(producto => producto.precio += 30);
console.log(aumentos);
//[155, 100, 80, 130] y el valor de cada producto cambio.