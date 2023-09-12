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
    <div id = "card">
        <img src="${phones[i].img}" alt="${phones[i].brand} ${phones[i].model}" width="156px" height="202px">
        <h4> ${phones[i].name} </h4>
        <p> RAM: ${phones[i].ram}GB </p>
        <p> ROM: ${phones[i].rom}GB </p>
        <button onclick="addToCart(${i})">Add To Cart &nbsp;<i class="fa-solid fa-arrow-right"></i></button>
    </div>
    `)
}



const cartItems = [];

function addToCart(index) {


    if (cartItems.includes(phones[index])) {
        console.log("Pehly Se Hey Ga");
        phones[index].quantity += 1;
        // cartItems[index].price = (phones[index].price) * cartItems[index].quantity;
    }
    else {
        console.log("Nahi hey");
        cartItems.push(phones[index]);
    }

    console.log(cartItems);
}















