let label = document.getElementById('label')
let shoppingCart = document.getElementById('shopping-cart')

let CARRITO = JSON.parse(localStorage.getItem("data")) || [];


let update = (id) => {
    let search3 = CARRITO.find((x) => x.id === id);
    // document.getElementById(id).innerHTML = search3.item;
    calculador();
    TotalAmount();
};

let calculador = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = (CARRITO.map((x) => x.item).reduce((x, y) => x + y, 0))

}


let generateCarItems = () => {
    if (CARRITO.length !== 0) {

        return (shoppingCart.innerHTML = CARRITO.map((x) => {
            let {
                id,
                item
            } = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            let search2 = shopItemsDataOfertas.find((z) => z.id === id) || [];
            return `
        <div class="cart-item">
            <img class="my-auto" width=100  src=${search.img || search2.img} alt="">
            <div class="details">
                <div class="title-price-x">
                    <h4 class="title-price">
                        <p class="title-name">${search.name || search2.name}</p>
                        <p class="title-item-price">$${search.precio|| search2.precio}</p>
                    </h4>
                    <i onclick="removerItem(${id})" class="bi bi-x-lg"></i>
                </div>
                    

                <div class="card-buttons">
                    <i onclick="remover(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">${item}</div>
                    <i onclick="comprar(${id})" class="bi bi-plus-lg"></i>
                </div>

                <h3 class="card-price-2">$ ${item * (search.precio || search2.precio) }</h3>
            </div>
        </div>`;
        }).join(""))
    } else {
        shoppingCart.innerHTML = ``
        label.innerHTML =
            `<h2>El carrito esta vacío</h2>
        <a href="./index.html">
            <button type="button" class="btn btn-dark homeBtn my-2">Volver al inicio</button>
        </a>`
    }
}


generateCarItems()
calculador()

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


    update(selectedItem.id)
    calculador()

    localStorage.setItem("data", JSON.stringify(CARRITO))
    generateCarItems()

}


let remover = (id) => {
    let selectedItem = id;
    let search = CARRITO.find((x) => x.id === selectedItem)

    if (search === undefined) return
    else if (search === 0) return;
    else {
        search.item -= 1
    }

    update(selectedItem.id)
    calculador()
    CARRITO = CARRITO.filter((x) => x.item !== 0)
    generateCarItems()
    localStorage.setItem("data", JSON.stringify(CARRITO))


}

let removerItem = (id) => {
    let selectedItem = id;
    CARRITO = CARRITO.filter((x) => x.id !== selectedItem);
    localStorage.setItem("data", JSON.stringify(CARRITO))
    
    TotalAmount();
    generateCarItems()
    calculador()

}

let TotalAmount = () => {
    if (CARRITO.leng !== 0) {
        let amount = CARRITO.map((x) => {
            let {
                item,
                id
            } = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            let search2 = shopItemsDataOfertas.find((z) => z.id === id) || [];
            return item * (search.precio || search2.precio)
        }).reduce((x,y) => x+y, 0)
        label.innerHTML = `
        <h2>Precio Total : $${amount}</h2>
        <button class="btn btn-success pagar">Pagar Carrito</button>
        <button class="btn btn-danger remover" onclick="clearCart()">Limpiar Carrito</button>
        `
       
    } else return
}

let clearCart = () => {
    
    CARRITO = []
    generateCarItems()
    localStorage.setItem("data", JSON.stringify(CARRITO))
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se ha vaciado el carrito',
        showConfirmButton: false,
        timer: 1500
      })
      
    
}

TotalAmount();

