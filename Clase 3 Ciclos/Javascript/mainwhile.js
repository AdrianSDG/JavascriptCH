console.log("Funciona el link");

//Ejemplo while
/*let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
alert("El usuario ingresó "+ entrada);
//Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
entrada = prompt("Ingresar otro dato").toUpperCase();
}*/

//Ejemplo do while
/*let numero = 0;
do{
//Repetimos con do...while mientras el usuario ingresa un n°
numero = prompt("Ingresar Número");
console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.
}while(parseInt(numero));*/

//Ejemplo switch
/*let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
switch (entrada) {
case "ANA":
alert("HOLA ANA");
break;
case "JUAN":
alert("HOLA JUAN");
break;
default:
alert("¿QUIÉN SOS?")
break;
}
entrada = prompt("Ingresar un nombre");
}*/

//Ejemplo anterior transformado con do while(el default en este caso puede no estar)
/*let entrada;
do{
    entrada = prompt("Ingresar nombre");
switch (entrada) {
    case "ANA":
        alert("HOLA ANA");
        break;
    case "JUAN":
        alert("HOLA JUAN");
        break;
    default:
        alert("¿QUIÉN SOS?")
        break;
    }
}while(entrada != "ESC" );*/

//Ejemplo
// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum
/*let sum = 0;
let number = 0;
do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0)
console.log(`The sum is ${sum}.`);*/

//Entrega
let i = 1;
const n = 5;
do {
    console.log(i);
    i++;
} while(i <= n);

//Entrega inicial, pero no logro que responda (mal la sintaxis)
let numero;
let suma;
do {
    numero =parseInt(prompt("Pone un numero entre 0 y 20"));
    switch(numero){
        case numero <= 5:
            suma = numero + 10;
            document.write("<div style='color: red'> Le sume 10, el nuevo es: " + suma +"</div>");
            break;
        case (numero > 5) && (numero <= 10):
            suma = numero + 20;
            document.write("<div style='color: red'> Le sume 20, el nuevo es: "+ suma +"</div>");
            break;
        case (numero >10) && (numero <= 20):
            suma = numero + 30;
            document.write("<div style='color: red' Le sumo 30, el nuevo es: "+ suma +"</div>");
            break;         
    }
     
}while( numero < 20);


//Entrega corregida
let numero = parseInt(prompt("Pone un numero entre 0 y 20"));

let suma;

do {

  switch (numero === 30) {

    case numero <= 5:

      suma = numero + 10;

      numero = 30;

      document.write(

        "<div style='color: red'> Le sume 10, el nuevo es: " + suma + "</div>"

      );

      break;

    case numero > 5 && numero <= 10:

      suma = numero + 20;

      numero = 30;

      document.write(

        "<div style='color: red'> Le sume 20, el nuevo es: " + suma + "</div>"

      );

      break;

    case numero > 10 && numero <= 20:

      suma = numero + 30;

      numero = 30;

      document.write(

        "<div style='color: red' Le sumo 30, el nuevo es: " + suma + "</div>"

      );

      break;

    default:

      document.write(

        "<div style='color: red'> No es un numero entre 0 y 20</div>"

      );

  }

} while (numero < 20);