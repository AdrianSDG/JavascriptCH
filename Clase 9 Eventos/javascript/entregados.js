console.log("Clase 9 entrega dos");

let formulario = document .getElementById ("contacto");
formulario.addEventListener ("submit", validarForm );
function validarForm(evt){
evt.preventDefault ();
let formulario = evt.target;
let seleccion = document.createElement("div");
    seleccion.innerHTML = (formulario.children[ 0].value);
(formulario.children[ 1].value);
(formulario.children[ 2].value);
(formulario.children[ 3].value);
document.body.appendChild(seleccion);}

