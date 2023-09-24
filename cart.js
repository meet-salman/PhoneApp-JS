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
            <div id="cart-item"> 
                <h4> ${cartItems[i].name} </h4>
                <p> Quantity: ${cartItems[i].quantity} </p>
                <p> Price: ${cartItems[i].price}</p>
                <p> Total Price: ${cartItems[i].price * cartItems[i].quantity}</p>
                <button class="qt-btn" onclick="increaseQuantity(${i})"> + </button>
                <span> ${cartItems[i].quantity} </span>
                <button class="qt-btn" onclick="decreaseQuantity(${i})"> - </button>
                <button class="qt-btn" onclick="deleteitem(${i})"> Delete </button>
            </div>
            `)
            
        }
}

renderCart()


function increaseQuantity(index) {
    cartItems[index].quantity += 1;

    cart.innerHTML = ''
    renderCart()
}


function decreaseQuantity(index) {
    cartItems[index].quantity -= 1;

    cart.innerHTML = ''
    renderCart()
}


function deleteitem(index) {
    cartItems.splice(index, 1);

    cart.innerHTML = ''
    renderCart()
}

























