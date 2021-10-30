console.log("Constructores");
let A = {x:1, z:10}
let B = A

console.log(A);
console.log(B);
console.log(A.x);
console.log(B.x);

B.x = 5;
console.log(A.x);
console.log(B.x);

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    }
    const homero = new Persona("Homero", 39, "Av. Siempreviva 742");
    const marge = new Persona("Marge", 36, "Av. Siempreviva 742");
    const pedro = new Persona("Pedro", 43, "Av. Rivera 2233");

    console.log(homero);
    console.log(marge);
    console.log(pedro);
////////////////////////////////////////////////
//METODOS Y OPERACIONES CON OBJETOS

let str = "dabale arroz a la zorra el abad";
str.toLowerCase()

function hagamosAlgo(){
    console.log("correr")
}
hagamosAlgo();

const auto = {
    color:"rojo",
    encender: function(){
        console.log("encender")
    }
}
auto.encender();
//////////////////////////////////////////

function Individuo(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.present = function(){ console.log("HOLA SOY "+ this.nombre)}
    }
    const individuo1 = new Individuo("Homer", 38, "Av. Italia 1230");
    const individuo2 = new Individuo("Margaret", 37, "Av. Italia 1230");
    individuo1.present();
    individuo2.present();
////////////////////////////////////////////////

const jonDoe = { nombre: "Jhon Doe", edad: 32, calle: "Av. Sarmiento 7332"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in jonDoe);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in jonDoe);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in jonDoe) {
console.log(jonDoe[propiedad]);
}
//////////////////////////////////////////////////////////////////////
//CLASES
//Las clases de javascript, introducidas en ES6, proveen una sintaxis mucho más clara y
//simple para crear objetos personalizados.
//Son una equivalencia al empleo de función constructora y permite definir distintos tipo
//de métodos

class People{
    constructor(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    }
    talk(){
        console.log("HOLA SOY "+ this.nombre);
        }
    }
    const people1 = new People("Martin", 39, "Gral. Artigas");
    people1.talk();






