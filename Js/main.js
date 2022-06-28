// let producto = "";
// let notebook = 20000;
// let tablet = 7000;
// let monitor = 15000;
// let cargadores = 600;
// let precio = 0;
// let cantidad = 0;
// let envio = 150;
// let precioTotal = 0;
// let VolverComprar = false;

const productos = [{
        "id": 1,
        "nombre": "Notebook",
        "precio": 20000,
        "cantidad": 1
    }, {
        "id": 2,
        "nombre": "Tablet",
        "precio": 7000,
        "cantidad": 1
    },
    {
        "id": 3,
        "nombre": "Monitor",
        "precio": 15000,
        "cantidad": 1
    },
    {
        "id": 4,
        "nombre": "Cargadores",
        "precio": 600,
        "cantidad": 1
    },
]

const nombres = productos.map(producto => producto.nombre)

console.log(nombres)

const CARRITO = []

let compra = prompt("¿Desea comprar algo?").toLocaleLowerCase();


if (compra == null) {
    alert("No has seleccionado ningún producto.");



}

if (compra == "si") {

    let eleccionProductos = "";

    while (eleccionProductos != "no".toLocaleLowerCase()) {

        eleccionProductos = prompt(`
            ¿Que productos desea agregar al carrito?

            Para dejar de comprar, escribir "no".

            Digite 1 para comprar Notebook.
            Digite 2 para comprar Tablet.
            Digite 3 para comprar Monitor.
            Digite 4 para comprar Cargadores.
        
        `)

        if (eleccionProductos == null) {

            break;

        }

        if (eleccionProductos == "no".toLowerCase()) {

            alert(`Gracias por visitarnos, vuelva cuando quiera.`)
            
            break;

        }


        agregarAlCarrito(parseInt(eleccionProductos))
        console.log(sumarTotal())
    }
    } else {
    alert("Gracias por visitarnos, vuelva cuando quiera.");
    }


    function agregarAlCarrito(id) {
    
        let producto = productos.find(producto => producto.id === id)

        let productoEnCarrito = CARRITO.find(producto => producto.id === id)

        if (productoEnCarrito) {

            productoEnCarrito.cantidad++;
            console.log(CARRITO)
        } else {
            producto.cantidad = 1;
            CARRITO.push(producto)
            console.log(CARRITO)
        }
    }

function sumarTotal() {
    let total = 0;

    CARRITO.forEach(producto => {

        total = total + producto.cantidad * producto.precio
    })
    
    return total;
}



// alert("¡Bienvenido a Electronix, los mejores productos electrónicos de Bs As!");

// let NombreIngresado = prompt("Para comenzar nos gustaría saber su nombre:")

// console.log(NombreIngresado);

// alert("Bienvenido a Electronix " + NombreIngresado + ".")


// do {
//     producto = prompt(`Bienvenidos a Electronix \n ¿Que desea pedir?
//     Notebook / precio=${notebook}
//     Tablet / precio=${tablet}
//     Monitor / precio=${monitor}
//     Cargadores / precio=${cargadores}`)
//     cantidad = Number(prompt("¿Cuantos desea llevar?"));
//     switch (producto) {
//         case "Notebook":
//             precio = notebook //precio = 20000
//             break;
//         case "Tablet":
//             precio = tablet //precio = 7000
//             break;
//         case "Monitor":
//             precio = monitor //precio = 15000
//             break;
//         case "Cargadores":
//             precio = cargadores //precio = 600
//             break;
//         default:
//             alert("No has ingresado un producto valido, de en aceptar y vuelva a intentar.")
//             break;
//     }

//     function multiplicar(precio, cantidad) {
//         precioTotal += precio * cantidad;
//     }

//     function MostrarPrecioTotal(precioTotal) {
//         console.log(precioTotal);
//     }
//     multiplicar(precio, cantidad);
//     MostrarPrecioTotal(precioTotal);

//     VolverComprar = confirm(`Su total de compra es de $${precioTotal}\n¿Desea llevar algo más?\nDe en aceptar para continuar su compra o en cancelar para finalizar la compra.`)
// } while (VolverComprar);

// alert("Total de su compra en espera es de: $" + precioTotal);



//!Swiper js code //

const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    keyboard: true,
    mousewheel: true,

})