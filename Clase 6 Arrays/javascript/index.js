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

console.log(arrayB[0]);
console.log(arrayC[1]);
console.log(arrayD[2]);
console.log(arrayE[3]);
console.log(arrayF[3]);

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

//Recorriendo arrays
for(let i=0; i<3; i+=1){
    console.log(meses[i]);
    console.log(arrayA[i]);
    console.log(arrayB[i]);
    console.log(arrayC[i]);
    console.log(arrayD[i]);
    console.log(arrayE[i]);
    console.log(arrayF[i]);
}

console.log("PROPIEDADES");
console.log(meses.length);
console.log(arrayF.length);

console.log(meses[6]);
console.log(meses[9]);

meses[6] = "julio";
console.log(meses[6]);

meses[9] = "octubre";
console.log(meses);

const frutas = ['guindas', 'manzanas', 'bananas'];
//frutas.sort(); // ['bananas', 'guindas', 'manzanas']

const puntos = [1, 10, 2, 21];
//puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

const cosas = ['word', 'Word', '1 Word', '2 Words'];
//cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.
