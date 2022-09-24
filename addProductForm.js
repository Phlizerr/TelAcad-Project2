root.innerHTML += `
    <form id="add-product">
        <input type="text" name="name" id="name" placeholder="Name"/>
        <input type="number" name="price" id="price" placeholder="Price"/>
        <input type="number" name="releaseYear" id="releaseYear" placeholder="Release Year"/>
        <input type="submit" id="submitButton"/>
    </form>
`

const date = new Date();

function addFormFunctionality() {
    const form = document.querySelector('#add-product');
    form.addEventListener('submit', function(event) {
        console.log(event)
        event.preventDefault();
        const phoneName = event.target.name.value;
        const phonePrice = Number(event.target.price.value);
        const phoneReleaseYear = Number(event.target.releaseYear.value);
        const newPhone = {
            name: phoneName,
            price: phonePrice,
            releaseYear: phoneReleaseYear,
            dateWhenAdded: date.toDateString()
        };

        const localStorageProducts = getProducts();
        localStorageProducts.unshift(newPhone);
        setProducts(localStorageProducts);
        renderProductList(localStorageProducts);
    })
}

window.addEventListener('load', addFormFunctionality);