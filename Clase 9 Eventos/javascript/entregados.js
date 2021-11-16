console.log("Clase 9 entrega dos");

let miForm = document .getElementById ("contacto");
miForm.addEventListener ("submit", validarForm);
function validarForm(evt){
evt.preventDefault ();
document.write("Por favor corrobora que tus datos son los siguientes:");
let formulario = evt.target;
document.write("<p style='background-color: yellow; text-align: center'>"+ formulario.nombre.value +"</p>");
document.write("<p style='background-color: yellow; text-align: center'>"+ formulario.apellido.value +"</p>");
document.write("<p style='background-color: yellow; text-align: center'>"+ formulario.email.value +"</p>");
document.write("<p style='background-color: yellow; text-align: center'>"+ formulario.telefono.value +"</p>");
document.write("<p style='background-color: yellow; text-align: center'>Disciplina elegida: "+ formulario.grupo.value +"</p>");
}
