const products = document.querySelector('#products');


const phones = [
    {
        img: './assets/ph.png',
        name: 'Samsung S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        quantity: 1,
        price: 25000
    },
    {
        img: './assets/ph.png',
        name: 'Xiomi Note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        quantity: 1,
        price: 22000
    },
    {
        img: './assets/ph.png',
        name: 'Tecno Spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        quantity: 1,
        price: 15000
    },
    {
        img: './assets/ph.png',
        name: 'Oppo F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        quantity: 1,
        price: 19000
    },
    {
        img: './assets/ph.png',
        name: 'Vivo Y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        quantity: 1,
        price: 35000
    }
]



for (let i = 0; i < phones.length; i++) {

    products.innerHTML +=
        (`
    <div id = "product-card">
        <img src="${phones[i].img}" alt="${phones[i].brand} ${phones[i].model}" width="156px" height="202px">
        <h4 class="mt-2"> ${phones[i].name} </h4>
        <p> ${phones[i].price} Rs </p>
        <button class="pd-btn" onclick="addToCart(${i})">Add To Cart &nbsp;<i class="fa-solid fa-arrow-right"></i></button>
    </div>
    `)
}



const data = localStorage.getItem('cartItems');
const cartItems = [...JSON.parse(data)];


function addToCart(index) {

    if (cartItems.includes(phones[index])) {

        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i] === phones[index]) {
                console.log("Phly se hey ga");
                cartItems[i].quantity += 1;
            }
        }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item Quantity Added',
            showConfirmButton: false,
            timer: 1500
        })

    }
    else {
        console.log("Nahi hey");
        cartItems.push(phones[index]);

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item Added To Cart',
            showConfirmButton: false,
            timer: 1500
        })
    }

    console.log(cartItems);
}


function goToCart() {

    const cart = JSON.stringify(cartItems);
    localStorage.setItem('cartItems', cart);
    window.location = 'cart.html';
}






















