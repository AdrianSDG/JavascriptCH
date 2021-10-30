console.log("EJEMPLO APLICADO OBJETOS");

class Producto {
    constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
    }
    sumaIva() {
    this.precio = this.precio * 1.21;
    }
    vender() {
    this.vendido = true;
    }
    }

    prod = prompt("Ingresar producto");
    precio = prompt("ingresar precio");

    const producto1 = new Producto(prod, precio);
    const producto2 = new Producto("fideo", "50");
    producto1.sumaIva();
    producto2.sumaIva();
    producto1.vender();

console.table(producto1);