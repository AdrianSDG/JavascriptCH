console.log("Bienvenido a la Clase 4");
//En el caso de invocar la funcion antes de definirla funciona igual
//Cuando JavaScript hace lectura del codigo lo hace de arriba para abajo pero
//en dos veces aplicandole a function y var
function saludar() {
    console.log("Bienvenidos a las funciones");
}
saludar();

function solicitarNombre(){
    let nombreIngresado = prompt("Ingresar nombre");
    console.log("El nombre ingresado es " + nombreIngresado);
    }
solicitarNombre();
solicitarNombre();

function escribirNombre(){
    let nombre = prompt("Pone tu nombre");
    document.write("<p style='color: blue'>El nombre es " + nombre + "</p>");
}
escribirNombre();
escribirNombre();

function accion(dato){
    document.write("<p style='color: red'>" + dato + "</p>");
}
let suma = 1 + 1;
accion(1);
accion(true);
accion("hola");
accion(suma);

function otraAccion(dato){
    if(dato){
        document.write("<p style='color: black'>" + dato + "</p>");
    }else{
        document.write("<p style='color: black'>No hay dato</p>");
    }
}
otraAccion();
otraAccion("Bienvenidos");


function accionConc(dato1, dato2){
    document.write("<p style='color: green'>" + dato1 +" "+ dato2 + "</p>");
}
accionConc();
accionConc("Hola");
accionConc("hola", "Señor");
//Poniendo (dato1="algo", dato2="algo") se ponen datos por defecto en el caso
//de que no se introduzcan otros
function accionConc2(dato1="NO", dato2="HAY NADA"){
    document.write("<p style='color: black'>" + dato1 +" "+ dato2 + "</p>");
}
accionConc2();
accionConc2("Hola");
accionConc2("hola", "Señor");


//Declaración de variable para guardar el resultado de la suma
let resultado = 0;
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
resultado = primerNumero + segundoNumero;
}
//Función que muestra resultado por consola
function mostrar(mensaje) {
console.log(mensaje);
}
//parseInt no me toma los numeros con decimales, por eso uso parseFloat o Number
let num1 = parseFloat(prompt("Introduce un numero")); 
let num2 = parseFloat(prompt("Introduce el siguiente numero"));
//Llamamos primero a sumar y luego a mostrar
sumar(num1, num2);
mostrar(resultado);

//Calculadora
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
    case "+":
    return primerNumero + segundoNumero;
    break;
    case "-":
    return primerNumero - segundoNumero;
    break;
    case "*":
    return primerNumero * segundoNumero;
    break;
    case "/":
    return primerNumero / segundoNumero;
    break;
    default:
    return 0;
    break;
    }
    }
    let aLgo = (calculadora(10, 5, "*"));
    console.log (aLgo);
    document.write(calculadora(10, 10, "*"));

    


