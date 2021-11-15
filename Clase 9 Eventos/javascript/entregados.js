console.log("Clase 9 entrega dos");

let miForm = document .getElementById ("contacto");
miForm.addEventListener ("submit", validarForm);
function validarForm(evt){
evt.preventDefault ();
document.write("Por favor corrobora que tus datos son los que ingresaste");
let formulario = evt.target;
document.write("<p>"+ formulario.children[0].value +"</p");
document.write("<p>"+ formulario.children[1].value +"</p>");
document.write("<p>"+ formulario.children[2].value +"</p>");
document.write("<p>"+ formulario.children[3].value +"</p>");
}
