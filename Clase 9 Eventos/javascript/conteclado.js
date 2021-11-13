console.log("Clase 9 Eventos con Teclado");

let inpNombre = document.getElementById("nombre")
let inpEdad = document.getElementById("edad")

inpNombre.onkeyup = () => {console.log("keyUp")};
inpEdad.onkeydown = () => {console.log("keyDown")};
inpNombre.onchange = () => {console.log("valor1")};
inpEdad.onchange = () => {console.log("valor2")};
///////////////////////////////////////////////////////////////////////////
//Formulario 1 evento Submit
let miFormulario = document .getElementById ("formulario");
miFormulario. addEventListener ("submit", validarFormulario );
function validarFormulario (e){
e.preventDefault (); //Esto cancela el evento predeterminado del form al entrar en action
console.log("Formulario Enviado ");
}
/////////////////////////////////////////////////////////////////////////////////////
//Formulario 2
let miFormulariodos = document .getElementById ("formularioDos");
miFormulariodos. addEventListener ("submit", validarFormulariodos );
function validarFormulariodos (evt){
//Cancelamos el comportamiento del evento
evt.preventDefault ();
//Obtenemos el elemento desde el cual se disparó el evento
let formulario = evt.target
//Obtengo el valor del primero hijo <input type="text">
console.log(formulario.children[ 0].value);
//Obtengo el valor del segundo hijo <input type="number">
console.log(formulario.children[ 1].value);
}
///////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", ()=> {
    console.log("El DOM ya esta cargado");
});
//Esto me corrobora que la pagina cargo por completo correctamente