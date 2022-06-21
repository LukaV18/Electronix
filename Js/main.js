let producto = "";
let notebook = 20000;
let tablet = 7000;
let monitor = 15000;
let cargadores = 600;
let precio = 0;
let cantidad = 0;
let envio = 150;
let precioTotal = 0;
let VolverComprar = false;

alert("¡Bienvenido a Electronix, los mejores productos electrónicos de Bs As!");

let NombreIngresado = prompt("Para comenzar nos gustaría saber su nombre:")

console.log(NombreIngresado);

alert("Bienvenido a Electronix " + NombreIngresado + ".")

do {
    producto = prompt(`Bienvenidos a MrBurger \n ¿Que desea pedir?
    Notebook / precio=${notebook}
    Tablet / precio=${tablet}
    Monitor / precio=${monitor}
    Cargadores / precio=${cargadores}`)
    cantidad = Number(prompt("¿Cuantos desea llevar?"));
    switch (producto) {
        case "Notebook":
            precio = notebook //precio = 20000
            break;
        case "Tablet":
            precio = tablet //precio = 7000
            break;
        case "Monitor":
            precio = monitor //precio = 15000
            break;
        case "Cargadores":
            precio = cargadores //precio = 600
            break;
        default:
            alert("No has ingresado un producto valido, de en aceptar y vuelva a intentar.")
            break;
    }

    function multiplicar(precio, cantidad) {
        precioTotal += precio * cantidad;
    }

    function MostrarPrecioTotal(precioTotal) {
        console.log(precioTotal);
    }
    multiplicar(precio, cantidad);
    MostrarPrecioTotal(precioTotal);

    VolverComprar = confirm(`Su total de compra es de $${precioTotal}\n¿Desea llevar algo más?\nDe en aceptar para continuar su compra o en cancelar para finalizar la compra.`)
} while (VolverComprar);

alert("Total de su compra en espera es de: $" + precioTotal);