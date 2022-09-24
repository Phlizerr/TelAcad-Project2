const root = document.querySelector('#root');

const products = [
    {
        name: 'Iphone XS (Default input)',
        price: 4500,
        releaseYear: 2016,
        dateWhenAdded: new Date(1999, 7, 2).toDateString()
    },
    {
        name: 'Huawei P30 (Default input)',
        price: 4000,
        releaseYear: 2018,
        dateWhenAdded: new Date(1992, 12, 5).toDateString()
    },
    {
        name: 'Samsung S10 (Default input)',
        price: 4250,
        releaseYear: 2017,
        dateWhenAdded: new Date(2004, 4, 9).toDateString()
    }
];

function getProducts() {
    const localStorageProducts = localStorage.getItem("products");
    // console.log(localStorageProducts);
    const parsedProducts = JSON.parse(localStorageProducts);
    return parsedProducts;
}

function setProducts(products) {
    const stringifiedProducts = JSON.stringify(products);
    localStorage.setItem("products", stringifiedProducts);
}

if (getProducts() === null){
    setProducts(products);
}

function startRendering() {
    const localStorageProducts = getProducts();
    renderProductList(localStorageProducts);
}

window.addEventListener('load', startRendering);