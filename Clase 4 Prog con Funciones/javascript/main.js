console.log("funciones Anonimas y f. Flecha");

 let anonima = function(){
    console.log("funcion anonima")
}
console.log(anonima);
console.log(typeof anonima);
anonima();

/*let miFuncion = function(parametro){
    return parametro
}*/

//Arrow Function

let miFuncion = (parametro)=>{
    return parametro
};
console.log(miFuncion(5));

let aFuncion = (parametro)=> {
    return parametro;
};

let bFuncion = (parametro)=> {
    return parametro;
};

let cFuncion = ()=> {
    return "Hola";
};

let dFuncion = _=> {
    return "Hola";
};

let eFuncion = (parametro1, parametro2)=>{
    return parametro1 + parametro2;
}

let fFuncion = f => {
    return f;
};

let gFuncion = g => g;

//Ejemplo
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva = x => x * 0.21;
let precioProducto = 500;
let precioDescuento = 50;
//Calculo el precioProducto + IVA - precioDescueto
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
console.log(nuevoPrecio);