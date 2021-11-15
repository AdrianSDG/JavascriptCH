console.log("Clase 9 entrega dos");

let miForm = document .getElementById ("contacto");
miForm.addEventListener ("submit", validarForm);
function validarForm(evt){
evt.preventDefault ();
document.write("Por favor corrobora que tus datos son los que ingresaste");
let formulario = evt.target;
document.write(formulario.children[ 0].value);
document.write(formulario.children[ 1].value);
document.write(formulario.children[ 2].value);
document.write(formulario.children[ 3].value);
}
