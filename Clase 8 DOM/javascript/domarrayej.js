console.log("Clase 8 DOM Array Ej Aplicado");

//Obtenemos el nodo donde vamos a agregar los nuevos elementos
let padre = document.getElementById("personas");
//Array con la información a agregar
let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
//Iteramos el array con for...of
for (const persona of personas) {
//Creamos un nodo <li> y agregamos al padre en cada ciclo
let li = document.createElement("li");
li.innerHTML = persona
padre.appendChild(li);
}