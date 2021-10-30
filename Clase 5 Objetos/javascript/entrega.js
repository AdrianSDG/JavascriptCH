console.log("Entrega Clase 5 Objetos");

function Entrenador(nombre, sexo, estilo){
    this.nombre = nombre;
    this.sexo = sexo;
    this.estilo = estilo;
}

const entrenador1 = new Entrenador("Albert", "M", "Entrenamientos HIT. Enfocado en objetivos esteticos");
const entrenador2 = new Entrenador("Samantha", "F", "Enfocada en trabajos de hipertrofia y desarrollo muscular");
const entrenador3 = new Entrenador("Brandon", "M", "Desarrollo de fuerza y mantenimiento a largo plazo");

function Alumno(nombre, edad, sexo, objetivo, tiempo){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.objetivo = objetivo;
    this.tiempo = tiempo;
    this.trainer = function(){
        if(tiempo <= 3){
            alert("Tu mejor opcion es Albert")
        }else if(tiempo >= 6 && tiempo <= 12){
            alert("Tu mejor opcion es Samantha")
        }else if(tiempo > 12){
            alert("Tu mejor opcion es Brandon")
        }
    }

}
nombre = prompt("Hola,¿Como te llamas?");
edad = parseFloat(prompt("Dime tu edad"));
sexo = prompt(" Dime tu sexo");
objetivo = prompt("Muy brevemente, ¿Que buscas?");
tiempo = parseFloat(prompt("¡Cuantos meses deseas entrenar?"));
  

const alumno1 = new Alumno(nombre, edad, sexo, objetivo, tiempo,);

alumno1.trainer();

console.table(entrenador1);
console.table(entrenador2);
console.table(entrenador3);
console.log(alumno1);


