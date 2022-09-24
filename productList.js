root.innerHTML += `
    <div id="myList">
    <ul id="product-list" style="list-style-type:none"></ul>
    </div>
`;

function renderProductList(products) {
    const productList = document.querySelector('#product-list');
    productList.innerHTML = '';
    products.forEach(function (product) {
        const phone = new Product(product.name, product.price, product.releaseYear, product.dateWhenAdded);
        phone.renderProduct();
    });
}