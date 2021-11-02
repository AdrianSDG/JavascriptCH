console.log("Clase 6 METODOS");

const miArray = ["marca", 3 ,"palabra"];
console.log(miArray);
console.log( miArray.toString() ); 

miArray.push('otro elemento');
console.log(miArray.length); 
console.log(miArray);

const otroArray = ["elefante","tigre","pantera",33]
console.log(otroArray);
console.log(otroArray.join("---"));

const arrayCombo = miArray.concat(otroArray);
console.log(arrayCombo);