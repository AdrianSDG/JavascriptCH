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

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
console.log(nombres);
const nombMasc = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3(sin contener la pos. 3)
console.log(nombMasc);

//Ejemplo Aplicado
//Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let cantidad = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
let entrada = prompt("Ingresar nombre");
listaNombres.push(entrada.toUpperCase());
console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));