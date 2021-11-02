console.log("Clase 6 Arrays");

//Arrays de datos primitivos
// Declaraciòn de array vacío
const arrayA = [];
// Declaracion de array con nùmeros
const arrayB = [1,2];
// Declaracion de array con strings
const arrayC = ["C1","C2","C3"];
// Declaracion de array con booleanos
const arrayD = [true,false,true,false];
// Declaracion de array mixto
const arrayE = [1,false,"C4"];
// Declaracion de otro array mixto
const arrayF = ["Jorge",5,true,arrayC,arrayA];
console.log(arrayA);
console.log(typeof arrayA);
console.log(arrayB);
console.log(typeof arrayB);
console.log(arrayC);
console.log(typeof arrayC);
console.log(arrayD);
console.log(typeof arrayD);
console.log(arrayE);
console.log(typeof arrayE);
console.log(arrayF);
console.log(typeof arrayF);

//Otra forma de escribir arrays
const meses = new Array("enero", "febrero", "marzo", "abril");
console.log(meses); 

const numeros = [1,2,3,4,5];
let resultado1 = numeros[0] + numeros[2]; // 1 + 3 = 4;
let resultado2 = numeros[1] + numeros[4]; // 2 + 5 = 7;
let resultado3 = numeros[1] + numeros[1]; // 2 + 2 = 4;
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);