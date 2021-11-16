console.log("Clase 9 entrega dos");

let miForm = document .getElementById ("contacto");
miForm.addEventListener ("submit", validarForm);
function validarForm(evt){
evt.preventDefault ();
document.write("Por favor corrobora que tus datos son los siguientes:");
let formulario = evt.target;
document.write("<p>"+ formulario.nombre.value +"</p>");
document.write("<p>"+ formulario.apellido.value +"</p>");
document.write("<p>"+ formulario.email.value +"</p>");
document.write("<p>"+ formulario.telefono.value +"</p>");
document.write("<p>"+ formulario.grupo.value +"</p>");
}
