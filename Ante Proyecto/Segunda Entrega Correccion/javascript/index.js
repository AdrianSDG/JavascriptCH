console.log("Entrenador Virtual (Segunda Entrega Correccion)");
//////////////////////////////////////////////////////ARRAYS
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
botonUno.addEventListener("click", respbotUno)
function respbotUno(){
    for (const trainer of coachNuno){
        let seleccion = document.createElement("div");
        seleccion.setAttribute("class", "bU");
seleccion.innerHTML = `<h3> Coach: ${trainer.coach}</h3>
<p>--Tarifa: ${trainer.tarifa}</p>
<p>--Estilo: ${trainer.estilo}</p>
<p>--Nivel: ${trainer.nivel}</p>`;
document.body.appendChild(seleccion);
}}

let botonDos = document.getElementById("nivelDos")
botonDos.addEventListener("click", respbotDos)
function respbotDos(){
    for (const trainer of coachNdos){
        let seleccion = document.createElement("div");
        seleccion.setAttribute("class", "bD");
seleccion.innerHTML = `<h3> Coach: ${trainer.coach}</h3>
<p>--Tarifa: ${trainer.tarifa}</p>
<p>--Estilo: ${trainer.estilo}</p>
<p>--Nivel: ${trainer.nivel}</p>`;
document.body.appendChild(seleccion);
}}

let botonTres = document.getElementById("nivelTres")
botonTres.addEventListener("click", respbotTres)
function respbotTres(){
    for (const trainer of coachNtres){
        let seleccion = document.createElement("div");
        seleccion.setAttribute("class", "bT");
seleccion.innerHTML = `<h3> Coach: ${trainer.coach}</h3>
<p>--Tarifa: ${trainer.tarifa}</p>
<p>--Estilo: ${trainer.estilo}</p>
<p>--Nivel: ${trainer.nivel}</p>`;
document.body.appendChild(seleccion);
}}

//////////////////////////////////////////////////////INGRESO DE ALUMNO
let inpNombre= document.getElementById("nombreAl");
let inpEdad = document.getElementById("edadAl");
let  inpObj = document.getElementById("objetivoAl");
let inpMeses = document.getElementById("mesesAl");

let botonAlum = document.getElementById("ingAlum")
botonAlum.addEventListener("click",ingDatos)
function ingDatos(){nombre = inpNombre.value;
edad = inpEdad.value;
objetivo = inpObj.value;
tiempo = inpMeses.value;
function Alumno(nombre, edad, objetivo, tiempo){
    this.nombre = nombre;
    this.edad = edad;
    this.objetivo = objetivo;
    this.tiempo = tiempo;
    this.trainer = function(){
        if(tiempo <= 5){
            alert("Te recomendamos como tutor al grupo de nivel 1")
        }else if(tiempo >= 6 && tiempo <= 12){
            alert("Te recomendamos como tutor al grupo de nivel 2")
        }else if(tiempo > 12){
            alert("Te recomendamos como tutor al grupo de nivel 2 o 3")
        }
    }

}
const alumno1 = new Alumno(nombre, edad, objetivo, tiempo,);

alumno1.trainer();
console.log(alumno1);
const alumJson = JSON.stringify(alumno1);
localStorage.setItem("alumno1", alumJson);}

//////////////////////////////////////////////////////