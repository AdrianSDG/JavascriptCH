console.log("Clase 6 ARRAY OBJETOS");

const objeto1 = { id: 1, producto: "Pantuflas", precio: 100 };
const array = [objeto1, { id: 2, producto: "Gorro", precio: 150 }];
array.push({ id: 3, producto: "Botas", precio: 200 });

console.table(objeto1);
console.table(array);

for(let item of array){
    console.log(item.producto),
    console.log(item.precio);
}

//Ejemplo Aplicado
class Producto {
    constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
    }
    sumaIva() {
    this.precio = this.precio * 1.21;
    }
    }
    //Declaramos un array de productos para almacenar objetos
    const productos = [];
    productos.push(new Producto("arroz", "125"));
    productos.push(new Producto("fideo", "70"));
    productos.push(new Producto("pan", "50"));

    for(let i=0; i < productos.length; i += 1){
        console.log(productos[i].nombre);
        console.log(productos[i].precio);
    }

    //Iteramos el array con for...of para modificarlos a todos
    for (const producto of productos)
    producto.sumaIva();
