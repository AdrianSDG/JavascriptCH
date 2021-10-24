//Estos simbolos (/**/) son para lineas de comentarios y puedo 
//deshabilitar algoritmos con ellas usandolas en principio y fin

//Ejemplo de pdf
/*let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");
if((nombreIngresado !="") && (apellidoIngresado !="")){
alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado);
}else{
alert("Error: Ingresar nombre y apellido");
}*/

//Ejemplo
/*let efectivo = 300
let credito = 400

let disponible = efectivo + credito
let totalCompra = 700

if (efectivo > totalCompra || credito > totalCompra){
    document.write("Podes pagar en efectivo o credito");
}else if(disponible >= totalCompra){
    document.write("Puede pagar con ambos");
    } else {
        document.write("No puede pagar"); 
}*/

//Ejemplo
/*const usuarioAutentificado = confirm("¿Autenticado?")
const puedePagar = confirm("¿Puede pagar?")

if (usuarioAutentificado && puedePagar){
    document.write("<strong>Tu pedido se realizo con exito</strong>") 
}else{
    document.write("<strong>Error con el pago</strong");
}*/

//Ejemplo
/*let nombreIngresado = prompt("Ingresar nombre");
if((nombreIngresado == "ANA") || (nombreIngresado =="ana")){
alert("El nombre ingresado es Ana");
}else{
alert("El nombre ingresado no es Ana");
}*/

//Ejemplo
/*let nombreIngresado = prompt("Ingresar nombre");
if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
alert("Hola Ema");
}else{
alert("Error: Ingresar nombre valido");
}*/

//Ejemplo de operador ternario
/*const autenticado = false
const nombre = "Adrian";
document.write(autenticado ? "Si esta autenticado":"No esta autenticado");

let resultado = nombre == "Pedro" ? "valor verdadero":"valor falso";
console.log(resultado);*/

//Entrega (funciona)
var valor = parseInt(prompt("Ingrese su numero favorito"));
var nombre = prompt("¿Como te llamas?");
if ((valor <= 0) || (nombre =="")){
    alert("Vamos no  seas negativo, ingresa un numero positivo y tu nombre");
}else if ((valor > 0) && (nombre !="")){
    resultado = valor * 10;
    alert(resultado +" seria un numero superior creo yo,"+" "+nombre);
}

