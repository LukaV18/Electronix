let shop = document.getElementById('shop')
let shopOfertas = document.getElementById('shopOfertas')

console.log(shopOfertas)
console.log(shop)

let shopItemsData = [{
        id: 1,
        name: "Tablet EXO Wave I716 1",
        precio: 160,
        img: "./assets/img/tablet.jpg",
        rating: `<div class="d-flex flex-row justify-content-center mb-3">
        <div class="ratings2 me-2"><i class="fa fa-star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                class="fa fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></i></div>
    </div>`
    },
    {
        id: 2,
        name: "Tablet EXO Wave I716 2",
        precio: 175,
        img: "./assets/img/tablet.jpg",
        rating: `<div class="d-flex flex-row justify-content-center mb-3">
        <div class="ratings2 me-2"><i class="fa fa-star"></i><i
                class="fa fa-star"></i><i class="fa fa-star"></i></i></div>
    </div>`
    },
    {
        id: 3,
        name: "Tablet EXO Wave I716 3",
        precio: 150,
        img: "./assets/img/tablet.jpg",
        rating: `<div class="d-flex flex-row justify-content-center mb-3">
        <div class="ratings2 me-2"></i><i class="fa fa-star"></i><i
                class="fa fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></i></div>
    </div>`
    },
    {
        id: 4,
        name: "Tablet EXO Wave I716 4",
        precio: 130,
        img: "./assets/img/tablet.jpg",
        rating: `<div class="d-flex flex-row justify-content-center mb-3">
        <div class="ratings2 me-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                class="fa fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></i></div>
    </div>`
    }
]

let shopItemsDataOfertas = [{
        id: 5,
        name: "Notebook Lenovo IdeaPad 15ITL6",
        precio: 130,
        descuento: 199,
        descripcion: `<div class="descripcion">
        <div class="mt-1 mb-1 spec-1"><span>Es antirreflejo</span><span
                class="dot"></span><span>Es
                táctil</span><span class="dot"></span><span>Pad numérico<br></span></div>
        </div>`,

        productoTexto: `<div class="productoTexto">
        <p class="text-justify  textoDesc">La notebook Lenovo IdeaPad 3 fue pensada para hacer
            tu
            vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla,
            la
            convertirá en tu PC favorita.<br><br>
        </p>
    </div>`,
        img: "./assets/img/Notebook2.jpg",
        rating: `<div class="ratings me-2"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa-solid fa-star-half-stroke"></i></div>`
    },

    {
        id: 6,
        name: "Quant trident shirts",
        precio: 240,
        descuento: 300,
        img: "./assets/img/Notebook3.jpg",
        descripcion: `<div class="descripcion">
        <div class="mt-1 mb-1 spec-1"><span>Es antirreflejo</span><span
                class="dot"></span><span>Es
                táctil</span><span class="dot"></span><span>Pad numérico<br></span></div>
        </div>`,

        productoTexto: `<div class="productoTexto">
        <p class="text-justify  textoDesc">La notebook Lenovo IdeaPad 3 fue pensada para hacer
            tu
            vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla,
            la
            convertirá en tu PC favorita.<br><br>
        </p>
    </div>`,

        rating: `<div class="ratings me-2"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
        </div>`
    },

    {
        id: 7,
        name: "Quant tinor shirts",
        precio: 160,
        descuento: 230,
        descripcion: `<div class="descripcion">
        <div class="mt-1 mb-1 spec-1"><span>Es antirreflejo</span><span
                class="dot"></span><span>Es
                táctil</span><span class="dot"></span><span>Pad numérico<br></span></div>
        </div>`,

        productoTexto: `<div class="productoTexto">
        <p class="text-justify  textoDesc">La notebook Lenovo IdeaPad 3 fue pensada para hacer
            tu
            vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla,
            la
            convertirá en tu PC favorita.<br><br>
        </p>
    </div>`,

        img: "./assets/img/Notebook4.jpg",
        rating: `<div class="ratings me-2"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa-solid fa-star-half-stroke"></i></div>`
    },

    {
        id: 8,
        name: "Notebook Lenovo IdeaPad 15ITL6",
        precio: 160,
        descuento: 190,
        descripcion: `<div class="descripcion">
        <div class="mt-1 mb-1 spec-1"><span>Es antirreflejo</span><span
                class="dot"></span><span>Es
                táctil</span><span class="dot"></span><span>Pad numérico<br></span></div>
        </div>`,

        productoTexto: `<div class="productoTexto">
        <p class="text-justify  textoDesc">La notebook Lenovo IdeaPad 3 fue pensada para hacer
            tu
            vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla,
            la
            convertirá en tu PC favorita.<br><br>
        </p>
    </div>`,

        img: "./assets/img/Screenshot_5.jpg",
        rating: `<div class="d-flex flex-row">
        <div class="ratings me-2"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></div><span>110</span>
    </div>`
    }
]

let generateShopOfertas = () => {
    return (shopOfertas.innerHTML = shopItemsDataOfertas.map((productoOfertas) => {
        let {
            id,
            name,
            precio,
            img,
            descuento,
            productoTexto,
            descripcion,
            rating
        } = productoOfertas;
        let search = CARRITO.find((x) => x.id === id) || [];
        return `
        <div class="row p-2 bg-white border rounded productoSombra my-2">
                        <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image"
                                src="${img}"></div>
                        <div class="col-md-6 mt-1">
                            <h5>${name}</h5>
                            <div class="d-flex flex-row">
                                ${rating}
                            </div>
                            ${descripcion}
                            ${productoTexto}
                        </div>
                        <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                            <div class="d-flex flex-row align-items-center">
                                <h4 class="me-1">$${precio}</h4><span class="strike-text">$${descuento}</span>
                            </div>
                            <h6 class="text-success">Envío gratis</h6>
                            <div class="d-flex flex-column mt-4"><button class="btn btn-danger btn-sm"
                                    type="button">Detalles</button><button class="btn btn-outline-primary btn-sm mt-2"
                                    type="button" onclick="comprar(${id})">Agregar al carrito</button></div>
                        </div>
                    </div>`
    }).join(""))
}


let CARRITO = JSON.parse(localStorage.getItem("data")) || [];

let comprar = (id) => {
    let selectedItem = id;
    let search = CARRITO.find((x) => x.id === selectedItem)

    if (search === undefined) {
        CARRITO.push({
            id: selectedItem,
            item: 1,

        })
    } else {
        search.item += 1
    }


    localStorage.setItem("data", JSON.stringify(CARRITO))
    calculador()
    console.log(CARRITO)
}


let remover = (id) => {
    let selectedItem = id;
    let search = CARRITO.find((x) => x.id === selectedItem)

    if (search === undefined) return
    else if (search === 0) return;
    else {
        search.item -= 1
    }
    localStorage.setItem("data", JSON.stringify(CARRITO))
    calculador()
    console.log(CARRITO)
}


let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((producto) => {
        let {
            id,
            name,
            precio,
            img,
            rating
        } = producto;
        let search = CARRITO.find((x) => x.id === id) || [];
        return `
        <div class="card producto m-4 productoSombra" id="product-id-${id}">
            <img class="card-img-top" src="${img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title text-start fs-4">$
                ${precio}</h5>
                <p class="card-text">${name}</p>
                ${rating}
                <a class="btn btn-primary" onclick="comprar(${id})">Agregar al carrito</a>
            </div>
        </div>`
    }).join(""))
}


let calculador = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = (CARRITO.map((x) => x.item).reduce((x, y) => x + y, 0))

}
generateShop()
generateShopOfertas()

calculador()

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