console.log("Bienvenidos a la clase de Condicionales");

let unNumero = 5;
let nombre = "Adrian";

console.log(typeof unNumero);
console.log(typeof nombre);

console.log(unNumero == 5);
console.log(unNumero == 6);
// Con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 5){
console.log("Es igual a 5");
}
// Con (unNumero == 6) comparamos si unNumero es igual a 6
if (unNumero == 6){
console.log("Es igual a 6");
}

let unColor = "Rojo"
// Con (unColor == "Rojo") comparamos si unColor es igual "Rojo"
if (unColor == "Rojo"){
console.log("el color es Rojo");
}else{
//La instrucción se interpreta cuando unColor NO es "Rojo"
console.log("el color NO es Rojo");
}

let color = prompt("Ingrese un color");
//Se puede poner el .toLocaleLowerCase() donde esta o luego del prompt
if(color.toLocaleLowerCase()=="rojo"){
    console.log("El color es Rojo");
} else {
    console.log("El color no es Rojo")
}

let precio = 10;
if (precio < 100) {
console.log("El precio es menor a 100");
}
else if (precio < 50) {
console.log("El precio es menor que 50");
}
else if (precio < 100) {
console.log("El precio es menor que 20");
}
else {
console.log("El precio es mayor que 100");
}

let esValida = true;
let number = 10;
let esMayor5 = (number > 5); // su valor sera true
if (esValida) {
document.write("Es boolean true");
}

//Valores falsy
//false, 0, null, undefined, NaN, "", ''


