console.log("hola, funcionando");

//Sintaxis
/*for(desde; hasta; actualización) {
    … //lo que se escriba acá se ejecutará mientras dure el
    ciclo
    }*/

//Ejemplo    
/*   for (let i = 0; i<10; i+=1){
    console.log("El valor de i es " + i);
}*/

//Ejemplo
// Solicitamos un valor al usuario
/*let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 0; i <= 10; i++) {
let resultado = ingresarNumero * i ;
document.write("<div style='color: red'>"+ingresarNumero +" X "+ i +" = "+ resultado+"</div>");
}*/

//Ejemplo
/*for (let i = 1; i <= 3; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    document.write("<div style='color: blue'> Turno N° "+i+" Nombre: "+ingresarNombre+"</div>");
    }*/

//Sentencia Break
   /* for (let i = 1; i <= 10; i++) {
        //Si la variable i es igual 5 interrumpo el for.
        if(i == 5){
        alert("Se corta en " + i);    
        break;
        }
        alert(i);
        }*/
        
//Sentencia Continue
/*for (let i = 1; i <= 10; i++) {
    //Si la variable i es igual 5 interrumpo el for.
    if(i == 5){
    console.log("No cuento el " +i+ " y sigo");    
    continue;
    }
    console.log(i);
}*/

//Ejemplo
/*let maximo=parseInt(prompt("Escribir el maximo"));
for(let i=0; i<=maximo; i+=1){
    if(i % 2 == 0){
        document.write("<div style='color: red'>El numero "+ i + " es par</div>");
    }else{
        document.write("<div style='color: red'>El numero "+ i + " es impar</div>");
    }
}*/

//Ejemplo anterior pero con expresion literal (template literal) usando (`)
/*let maximo=parseInt(prompt("Escribir el maximo"));
for(let i=0; i<=maximo; i+=1){
    if(i % 2 == 0){
        document.write(`<div style='color: red'>El numero ${i} es par</div>`);
    }else{
        document.write(`<div style='color: red'>El numero ${i} es impar</div>`);
    }
}*/ 









