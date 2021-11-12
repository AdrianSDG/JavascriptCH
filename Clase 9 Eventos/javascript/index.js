console.log("Clase 9 Eventos");

//OPCION 0(ejemplo de profesor,no funciona)
let botonDos = document.getElementById("segBoton")
botonDos.addEventListener("click", function(){
    console.log("Has presionado el segundo boton");
});

//OPCION 1
let boton = document. getElementById ("btnPrincipal ")
boton. addEventListener ("click", respuestaClick )
function respuestaClick (){
console. log("Respuesta evento ");
}

//OPCION 2
let botonTres = document. getElementById ("tercBoton")
botonTres.onclick = () =>{console. log("Respuesta de boton 3 ")}

//OPCION 3
//Es la forma onclick desde el parrafo dentro del html


