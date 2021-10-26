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
