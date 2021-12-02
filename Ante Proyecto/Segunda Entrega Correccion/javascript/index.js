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
let inpNombre = document.getElementById("nombreAl");
let inpEdad = document.getElementById("edadAl");
let  inpObj = document.getElementById("objetivoAl");
let inpMeses = document.getElementById("mesesAl");
let inpGener = document.getElementById("generoAl");

let botonAlum = document.getElementById("ingAlum")
botonAlum.addEventListener("click",ingDatos)
function ingDatos(){nombre = inpNombre.value;
edad = inpEdad.value;
sexo = inpGener.value;
objetivo = inpObj.value;
tiempo = inpMeses.value;
function Alumno(nombre, edad, sexo, objetivo, tiempo){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.objetivo = objetivo;
    this.tiempo = tiempo;
    this.trainer = function(){
        if(tiempo <= 5 && tiempo != 0){
            alert("Te recomendamos como tutor al grupo de nivel 1")
        }else if(tiempo >= 6 && tiempo <= 12){
            alert("Te recomendamos como tutor al grupo de nivel 2")
        }else if(tiempo > 12){
            alert("Te recomendamos como tutor al grupo de nivel 2 o 3")
        }
    }

}
const alumno1 = new Alumno(nombre, edad,sexo, objetivo, tiempo);

alumno1.trainer();
console.log(alumno1);
const alumJson = JSON.stringify(alumno1);
localStorage.setItem("alumno1", alumJson);}
const alumnoUno = JSON.parse(localStorage.getItem("alumno1"));
console.log(alumnoUno);

//////////////////////////////////////////////////////FUNCIONES DE ENTRENAMIENTO
let kilaje = 0;
let entrena = document.getElementById("btnEntrena")
entrena.addEventListener("click",entrenador)  
function entrenador(){
     let dato1 = parseInt(document.getElementById("kilPecho").value);
     let dato2 = parseInt(document.getElementById("kilEspalda").value);
     let dato3 = parseInt(document.getElementById("kilPiernas").value); 
     let dato4 = document.getElementById("repeSem").value;
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

let hidr = document.getElementById("btnHidratacion")
hidr.addEventListener("click", hidratacion)
let consumir = 0;
function hidratacion(){
    let liquido = document.getElementById("cantAgua").value;
    let frecLiq = document.getElementById("aguaSemana").value;
    consumir = liquido * frecLiq;
    if(consumir < 10){
        alert("Los "+ consumir +" Litros que ingieres son escasos, trata de llevarlos a 10 (2 por dia)");
    }else if(consumir == 10){
        alert("Tu consumo de "+ consumir +" Litros es bueno, mantenlo");
    }else if(consumir > 10){
        alert("El consumo de "+ consumir +" Litros´en la semana no es malo en si, pero llevandolo a un promedio de 2L por dia ya esta bien ");
    }
}

let recup = document.getElementById("btnRecup")
recup.addEventListener("click", recuperacion)
function recuperacion(){
    let diasPesas = document.getElementById("diPesas").value;;
    let diasCardio = document.getElementById("diCardio").value;;
    if(diasPesas < diasCardio){
        alert("Te recomiendo descansar dos dias en principio");
    }else if(diasPesas > diasCardio){
        alert("Con tres dias de descanso el cuerpo respondera bien");
    }else if(diasPesas == diasCardio){
        alert("En ese equilibrio te recomiendo un descanso activo");
    }
}

 
//////////////////////////////////////////////////////FORMULARIO CONTACTO
let miForm = document .getElementById ("contacto");
    miForm.addEventListener ("submit", validarForm);
    function validarForm(evt){
    evt.preventDefault ();
    document.write("<p style='background-color: grey; font-size: 30px'>Por favor corrobora que tus datos son los siguientes: </p>");
    let formulario = evt.target;
    let espacio = document.createElement("div");
    document.write("<p style='background-color: yellow; text-align: center; font-size: 20px'>"+ formulario.nombre.value +"</p>");
    document.write("<p style='background-color: yellow; text-align: center; font-size: 20px'>"+ formulario.apellido.value +"</p>");
    document.write("<p style='background-color: yellow; text-align: center; font-size: 20px'>"+ formulario.email.value +"</p>");
    document.write("<p style='background-color: yellow; text-align: center; font-size: 20px'>"+ formulario.telefono.value +"</p>");
    document.write("<p style='background-color: yellow; text-align: center; font-size: 20px'>Disciplina elegida: "+ formulario.grupo.value +"</p>");
    document.write('<a href="index.html" style="text-decoration: none;">Olimpo</a>');
    document.write('<a href="contacto.html" style="text-decoration: none;">Volver a ingresar</a>');
    document.body.appendChild(espacio);
}