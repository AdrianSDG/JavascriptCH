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

//Entrega
let kilaje = 0;
function entrenador(){
    let dato1 = parseFloat (prompt("Indica el kilaje total para tren superior delantero"));
    let dato2 = parseFloat (prompt("Indica el kilaje total para espalda"));
    let dato3 = parseFloat (prompt("Indica el kilaje total para piernas"));
    let dato4 = parseFloat (prompt("Indica las repeticiones de esas rutinas en la semana"));
    //realizo los calculos
    kilaje = (dato1 + dato2 + dato3) * dato4;
    if (kilaje < 100){
        alert("Manten una semana y aumenta el peso de " + kilaje + " kg unos 50kg")
    }else if(kilaje >= 100 && kilaje <= 200){
        alert("Los "+ kilaje + " kg estan bien, manten el peso pero aumenta las repeticiones en la semana")
    }else if( kilaje > 200){
        alert("Tu peso de "+ kilaje +" kg ya es suficiente por ahora, coordinemos para nuevos ejercicios")
    } 
}
let consumir = 0;
function hidratacion(){
    let liquido = parseFloat(prompt("¿Cuanta agua consumes en, litros,  mientras entrenas?"));
    let frecLiq = parseFloat(prompt("¿Cuantas veces repites esa cantidad en la semana?"));
    consumir = liquido * frecLiq;
    if(consumir < 10){
        alert("Los "+ consumir +" Litros que ingieres son escasos, trata de llevarlos a 10 (2 por dia)");
    }else if(consumir == 10){
        alert("Tu consumo de "+ consumir +" Litros es bueno, mantenlo");
    }else if(consumir > 10){
        alert("El consumo de "+ consumir +" Litros´en la semana no es malo en si, pero llevandolo a un promedio de 2L por dia ya esta bien ");
    }
}

entrenador();
hidratacion();