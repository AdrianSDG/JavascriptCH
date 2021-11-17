console.log("Clase 10 Workshop y repaso");
document.write("Clase 10 Workshop y repaso");

//////////CONDICIONALES
let nombreIngresado = prompt("Ingresar nombre");
if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
alert("Hola Ema");
}else{
alert("Error: Ingresar nombre valido");
}

//////////BUCLES
let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
alert("El usuario ingresó "+ entrada);
//Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
entrada = prompt("Ingresar otro dato");
}

//////////FUNCIONES
const suma = (a, b) => { return a + b };
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) => a - b ;
console.log(suma(15,20));
console.log(resta(20,5));

//////////OBJETOS
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
    }
    const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
    const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
    persona1.hablar();
    persona2.hablar();

//////////ARRAYS
const numeros = [1, 2, 3, 4, 5];
const porDos = numeros.map(x => x * 2); // porDos = [2, 4, 6, 8, 10]
const masCien = numeros.map(x => x + 100); // porDos = [102, 104, 106, 108, 110]
const nombres = ["Ana", "Ema", "Juan", "Elia"];
const lengths = nombres.map(nombre => nombre.length);//lengths = [3, 3, 4, 4]

//////////STORAGE Y JSON
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

//////////EVENTOSEN DOM
let miFormulario = document .getElementById ("formulario ");
miFormulario. addEventListener ("submit", validarFormulario );
function validarFormulario (e){
e.preventDefault ();
console.log("Formulario Enviado ");
}

