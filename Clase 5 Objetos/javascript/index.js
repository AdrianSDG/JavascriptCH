console.log("Clase 5 Objetos");

//let nombre = "Homero";
//let edad = 39;
//let calle = "Av. Siempreviva 742";
// Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" }
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.calle);

const nombreProd = "Megaminator 3000";
const precio = 500;
const disponible = true;

const producto = {};

console.log(producto);
console.log(typeof producto);

producto.nombre ="Megaminator 3000";

/////////////////////////////////////////////

const objetoUno = {
    nombre: "Telescope 1.5",
    precio: 1000,
    disponible: true,
}

console.log(objetoUno);
console.dir(objetoUno);
console.table(objetoUno);
document.write("<p>"+ objetoUno.nombre +"</p>");
document.write("<p>"+ objetoUno.precio +"</p>");

if(objetoUno.disponible){
    document.write("<p style='color: green'>El "+ objetoUno.nombre +" que tanto deseas cuesta "+ objetoUno.precio +" Dolares ,¿Los tienes?</p>");
}else{
    document.write("<p style='color: red'>No se encuentra stock de "+ objetoUno.nombre +" por el momento</p>");
}

//Supongamos viene otro comprador, puedo entonces cambiar la disponibilidad por fuera del objeto
objetoUno.disponible = false

if(objetoUno.disponible){
    document.write("<p style='color: green>El "+ objetoUno.nombre +" que tanto deseas cuesta "+ objetoUno.precio +" Dolares ,¿Los tienes?</p>");
}else{
    document.write("<p style='color: red'>No se encuentra stock de "+ objetoUno.nombre +" por el momento</p>");
}




