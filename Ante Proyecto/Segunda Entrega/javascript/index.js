console.log("Entrenador Virtual (Segunda Entrega)");
////////////////////////////////////////////ARRAYS
const arrayCoach = [{coach: "Marcel", tarifa: 2000, estilo:"HIT y pesas", nivel: 3},
{ coach: "Samantha", tarifa: 1200, estilo:"HIT", nivel: 1},
{ coach: "Brandon", tarifa: 1500, estilo:"HIT y pesas", nivel: 1},
{ coach: "Olivia", tarifa: 1700, estilo:"funcional y pesas", nivel: 2},
{ coach: "Robert", tarifa: 1600, estilo:"HIT", nivel: 2},
{ coach: "Max", tarifa: 1900, estilo:"funcional y pesas", nivel: 1},
{ coach: "Michelle", tarifa: 1300, estilo:"pesas", nivel: 1},
{ coach: "Pedro", tarifa: 1300, estilo:"pesas", nivel: 2},
{ coach: "Gabriel", tarifa: 1600, estilo:"HIT y pesas", nivel: 2},
{coach: "Santi", tarifa: 2500, estilo:"pesas", nivel: 3}];
console.table(arrayCoach);

const coachNuno =[{ coach: "Samantha", tarifa: 1200, estilo:"HIT", nivel: 1},
{ coach: "Brandon", tarifa: 1500, estilo:"HIT y pesas", nivel: 1},
{ coach: "Max", tarifa: 1900, estilo:"funcional y pesas", nivel: 1},
{ coach: "Michelle", tarifa: 1300, estilo:"pesas", nivel: 1}];

const coachNdos = [{ coach: "Olivia", tarifa: 1700, estilo:"funcional y pesas", nivel: 2},
{ coach: "Robert", tarifa: 1600, estilo:"HIT", nivel: 2},
{ coach: "Pedro", tarifa: 1300, estilo:"pesas", nivel: 2},
{ coach: "Gabriel", tarifa: 1600, estilo:"HIT y pesas", nivel: 2}];

const coachNtres = [{coach: "Marcel", tarifa: 2000, estilo:"HIT y pesas", nivel: 3},
{coach: "Santi", tarifa: 2500, estilo:"pesas", nivel: 3},]


let botonUno = document.getElementById("nivelUno")
botonUno.addEventListener ("click", respbotUno)
function respbotUno(){
    for (const trainer of coachNuno){
        let seleccion = document.createElement("div");
seleccion.innerHTML = `<h3> Coach: ${trainer.coach}</h3>
<p> Tarifa: ${trainer.tarifa}</p>
<b> Estilo ${trainer.estilo}</b>
<b> Nivel ${trainer.nivel}</b>`;
document.body.appendChild(seleccion);
}}

let botonDos = document.getElementById("nivelDos")
botonDos.addEventListener("click", respbotDos)
function respbotDos(){
    for (const trainer of coachNdos){
        let seleccion = document.createElement("div");
seleccion.innerHTML = `<h3> Coach: ${trainer.coach}</h3>
<p> Tarifa: ${trainer.tarifa}</p>
<b> Estilo ${trainer.estilo}</b>
<b> Nivel ${trainer.nivel}</b>`;
document.body.appendChild(seleccion);
}}

let botonTres = document.getElementById("nivelTres")
botonTres.addEventListener("click", respbotTres)
function respbotTres(){
    for (const trainer of coachNtres){
        let seleccion = document.createElement("div");
seleccion.innerHTML = `<h3> Coach: ${trainer.coach}</h3>
<p> Tarifa: ${trainer.tarifa}</p>
<b> Estilo ${trainer.estilo}</b>
<b> Nivel ${trainer.nivel}</b>`;
document.body.appendChild(seleccion);
}}



////////////////////