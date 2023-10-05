const data = localStorage.getItem('cartItems');
let cartItems = JSON.parse(data);


const cart = document.querySelector('#cart-items');
const amount = document.querySelector('#total-amount');


function renderCart() {

    let totalAmount = 0;

    if (cartItems.length > 0) {

        for (let i = 0; i < cartItems.length; i++) {

            totalAmount += cartItems[i].price * cartItems[i].quantity;

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
        amount.innerHTML = (`<h3  class="text-end"> Total Amount: ${totalAmount} </h3>`)

    } else {
        cart.innerHTML = `<h2  class="text-centre"> No Item Found.. </h2>`
        amount.innerHTML = "";
    }
}

renderCart()



// ==>> INCREASING ITEM QUANTITY

function increaseQuantity(index) {
    cartItems[index].quantity += 1;

    cart.innerHTML = ''
    renderCart()
}


// ==>> DECREASING ITEM QUANTITY

function decreaseQuantity(index) {
    cartItems[index].quantity -= 1;

    cart.innerHTML = ''
    renderCart()

    if (cartItems[index].quantity === 0) {
        cartItems.splice(index, 1);

        cart.innerHTML = ''
        renderCart()
    }
}


// ==>> DELETE CART ITEM

function deleteitem(index) {
    cartItems.splice(index, 1);

    cart.innerHTML = ''
    renderCart()
}


// ==>> REFRESH PAGE CART UPDATE

window.addEventListener('beforeunload', function () {

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

  });



// ==>> GO TO HOME CART UPDATE

  function goToHome() {
    const cart = JSON.stringify(cartItems);
    localStorage.setItem('cartItems' , cart);
    window.location = 'index.html'
}























