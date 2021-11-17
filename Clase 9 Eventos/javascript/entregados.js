console.log("Clase 9 entrega dos");

let miForm = document .getElementById ("contacto");
miForm.addEventListener ("submit", validarForm);
function validarForm(evt){
evt.preventDefault ();
document.write("<p style='background-color: grey; font-size: 30px'>Por favor corrobora que tus datos son los siguientes: </p>");
let formulario = evt.target;
document.write("<p style='background-color: yellow; text-align: center; font-size: 20px'>"+ formulario.nombre.value +"</p>");
document.write("<p style='background-color: yellow; text-align: center; font-size: 20px'>"+ formulario.apellido.value +"</p>");
document.write("<p style='background-color: yellow; text-align: center; font-size: 20px'>"+ formulario.email.value +"</p>");
document.write("<p style='background-color: yellow; text-align: center; font-size: 20px'>"+ formulario.telefono.value +"</p>");
document.write("<p style='background-color: yellow; text-align: center; font-size: 20px'>Disciplina elegida: "+ formulario.grupo.value +"</p>");
}
