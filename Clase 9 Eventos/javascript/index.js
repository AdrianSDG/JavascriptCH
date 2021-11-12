console.log("Clase 9 Eventos");

//OPCION 0
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

//Con imagenes(no me funciona)
//let caras = document.querySelector("img")-------puedo usarlo si tengo solo una imagen
let caras = document.getElementById("happyface")
caras.addEventListener("mouseenter", confundido);
caras.addEventListener("mouseout", feliz);

function confundido(){
    caras.setAttribute("src","./img/confuced face emoji.jpg");
}
function feliz(){
    caras.setAttribute("src","./img/happy emoji.jpg");
}

