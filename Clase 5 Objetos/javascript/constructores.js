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