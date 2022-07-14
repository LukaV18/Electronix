let shopOfertas = document.getElementById('shopOfertas')

console.log(shopOfertas)



let CARRITO = JSON.parse(localStorage.getItem("data")) || [];

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

generateShopOfertas()

let shop = document.getElementById('shop')

console.log(shop)

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

generateShop()

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




let calculador = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = (CARRITO.map((x) => x.item).reduce((x, y) => x + y, 0))

}



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