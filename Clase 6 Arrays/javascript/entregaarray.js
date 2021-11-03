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
const buscHit = arrayCoach.find(tutor => tutor.estilo ==="HIT");
console.log(buscHit);

const buscFyp = arrayCoach.find(tutor => tutor.estilo === "funcional y pesas");
console.log(buscFyp);

console.log("Filtro por precios");
const precioMedio = arrayCoach.filter(tutor => tutor.tarifa < 1700);
console.log(precioMedio);

const precioAlto = arrayCoach.filter(tutor => tutor.tarifa > 1600);
console.log(precioMedio);

console.log("Cambio de tarifa");
const nuevaTar = arrayCoach.map(tutor => tutor.tarifa +=100);
console.table(nuevaTar);

console.log("Ingreso de nuevo entrenador");
arrayCoach.push({coach: "Pedro", tarifa: 1400, estilo:"pesas"});
console.table(arrayCoach);