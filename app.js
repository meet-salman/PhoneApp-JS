const products = document.querySelector('#products');


const phones = [
    {
        brand: 'Samsung',
        img: './assets/ph.png',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel'
    },
    {
        brand: 'Xiomi',
        img: './assets/ph.png',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel'
    },
    {
        brand: 'Infinix',
        img: './assets/ph.png',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel'
    },
    {
        brand: 'Tecno',
        img: './assets/ph.png',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel'
    },
    {
        brand: 'Iphone',
        img: './assets/ph.png',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel'
    },
    {
        brand: 'Oppo',
        img: './assets/ph.png',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel'
    },
    {
        brand: 'Vivo',
        img: './assets/ph.png',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel'
    },
    {
        brand: 'Xiomi',
        img: './assets/ph.png',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel'
    },
    {
        brand: 'Infinix',
        img: './assets/ph.png',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel'
    },
    {
        brand: 'Xiomi',
        img: './assets/ph.png',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel'
    },
    {
        brand: 'Infinix',
        img: './assets/ph.png',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel'
    },
    {
        brand: 'Xiomi',
        img: './assets/ph.png',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel'
    },
    {
        brand: 'Infinix',
        img: './assets/ph.png',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel'
    },
    {
        brand: 'Xiomi',
        img: './assets/ph.png',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel'
    },
    {
        brand: 'Infinix',
        img: './assets/ph.png',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel'
    },

]


for (let i = 0; i < phones.length; i++) {
    products.innerHTML +=
        (`
    <div id = "card">
        <img src="${phones[i].img}" alt="${phones[i].brand} ${phones[i].model}" width="156px" height="202px">
        <h4> Brand: ${phones[i].brand} </h4>
        <p> Model: ${phones[i].model} </p>
        <p> RAM: ${phones[i].ram}GB </p>
        <p> ROM: ${phones[i].rom}GB </p>
        <button>Add To Cart &nbsp;<i class="fa-solid fa-arrow-right"></i></button>


    </div>
    `)
}
















