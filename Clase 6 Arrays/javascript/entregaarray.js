console.log("Clase 6 entrega");

const arrayCoach = [{coach: "Marcel", tarifa: 1000, estilo:"HIT y pesas"},
{ coach: "Samantha", tarifa: 1200, estilo:"HIT"},
{ coach: "Brandon", tarifa: 1500, estilo:"funcional"},
{ coach: "Olivia", tarifa: 1700, estilo:"funcional y pesas"},
{ coach: "Robert", tarifa: 1600, estilo:"HIT"},
{ coach: "Max", tarifa: 1900, estilo:"funcional y pesas"}];
console.table(arrayCoach);

console.log("Busqueda de un tutor");
const buscMarcel = arrayCoach.find(tutor => tutor.coach === "Marcel");
console.log(buscMarcel);

console.log("Filtro por estilos");
const buscHit = arrayCoach.filter(tutor => tutor.estilo ==="HIT");
console.log(buscHit);

const buscFyp = arrayCoach.filter(tutor => tutor.estilo === "funcional y pesas");
console.log(buscFyp);

console.log("Filtro por precios");
const precioMedio = arrayCoach.filter(tutor => tutor.tarifa < 1700);
console.log(precioMedio);

const precioAlto = arrayCoach.filter(tutor => tutor.tarifa > 1600);
console.log(precioAlto);

console.log("Cambio de tarifa");
const nuevaTar = arrayCoach.map(tutor => tutor.tarifa +=100);
console.table(nuevaTar);

console.log("Ingreso de nuevo entrenador");
arrayCoach.push({coach: "Pedro", tarifa: 1400, estilo:"pesas"});
console.table(arrayCoach);

//Por la naturaleza del funcionamiento del hoisting, por la forma en que lee javascript, los valores del precios
//al modificarlos, se van a ver cambiados desde el principio

//Segunda Entrega
const alumn = [{nombre: "Jorge", edad: 32, nivel:5},
{nombre: "Joaquin", edad: 25, nivel:2},
{nombre: "Martin", edad: 27, nivel:1},
{nombre: "Marta", edad: 29, nivel:3},
{nombre: "Sofia", edad: 30, nivel:4},
{nombre: "Juan", edad: 31, nivel:6},];

//alumn.sort(function(a, b){return a.edad - b.edad});
//alumn.sort(function(a, b){return b.edad - a.edad});
//console.table(alumn);

//alumn.sort(function(a,b){return a.nivel - b.nivel});
//alumn.sort(function(a,b){return b.nivel - a.nivel});
//console.table(alumn);

function ordAlum(){
    let opcion = prompt("¿Deseas ordenar por edad o nivel?");
    if(opcion === "edad"){
        alumn.sort(function(a, b){return a.edad - b.edad});
        console.table(alumn)
    }else if(opcion === "nivel"){
        alumn.sort(function(a,b){return a.nivel - b.nivel})
        console.table(alumn)
    }
};
ordAlum();



