

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



//--------------------------------------alerta de bienvenida--------------------------------------
let nombreUsuario = "";
const nombreOwner = ["Luka", "luka", "santarmy", "Electronix", "electronix"]

//llamada de la clase id del html a js para hacer la función de mostrar nombre de la persona+la bienvenida a la pagina.

let titulo = document.getElementById("tituloNombre")
do {

    if ( nombreUsuario != "") {
        alert("El nombre o apodo ingresado es del propietario, ingrese otro.")
    }

    nombreUsuario = prompt("Para comenzar queremos saber su nombre o apodo.");
} while (nombreOwner.indexOf(nombreUsuario) != -1 );

alert("Bienvenido a mi pagina web "+nombreUsuario+"!")
//aca se mostrara la bienvenida a esa persona y su nombre debajo de h1 de mi pagina.
titulo.innerText = "Bienvenido a mi pagina web "+nombreUsuario+"!";



const CARRITO = []

let compra = prompt("¿Desea comprar algo?").toLocaleLowerCase();


if (compra == null) {
    alert("No has seleccionado ningún producto.");



}



if (compra == "si".toLocaleLowerCase()) {

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


        agregarProductosAlCarrito(parseInt(eleccionProductos))
        console.log(sumarTotal())
    }
    } else {
    alert("Gracias por visitarnos, vuelva cuando quiera.");
    }


    function agregarProductosAlCarrito(id) {

        // logica del descuento
    
        let producto = productos.find(producto => producto.id === id);
    
        let productoEnCarrito = CARRITO.find(producto => producto.id === id);
    
        // Si esta en el carrito impacta en la cantidad
        if (productoEnCarrito) {
    
            productoEnCarrito.cantidad++;
    
            // podrian hacer una funcion que solo haga console.log
            console.log(CARRITO);
        } else {
    
            // Si no esta en el carrito pushealo por primera vez
            producto.cantidad = 1;
            CARRITO.push(producto);
            console.log(CARRITO);
        }
    
    }
    
    function sumarTotal() {
    
        let total = 0;
    
        CARRITO.forEach(producto => {
    
            total += producto.cantidad * producto.precio;
        })
    
        return total;
    }
    




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