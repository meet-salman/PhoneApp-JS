function goToHome() {
    window.location = 'index.html'
}


const data = localStorage.getItem('cartItems');
const cartItems = JSON.parse(data);


const cart = document.querySelector('#cart-items');


function renderCart() {

    for (let i = 0; i < cartItems.length; i++) {

        cart.innerHTML +=
            (`
        <div id = "card">
            <img src="${cartItems[i].img}" alt="${cartItems[i].brand} ${cartItems[i].model}" width="156px" height="202px">
            <h4> ${cartItems[i].name} </h4>
            <p> RAM: ${cartItems[i].ram}GB </p>
            <p> ROM: ${cartItems[i].rom}GB </p>
            <button class="pd-btn" onclick="addToCart(${i})">Add To Cart &nbsp;<i class="fa-solid fa-arrow-right"></i></button>
        </div>
        `)
    }

}

renderCart()




























