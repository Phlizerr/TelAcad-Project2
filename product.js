class Product {
    constructor(name, price, releaseYear, dateWhenAdded) {
        this.name = name;
        this.price = price;
        this.releaseYear = releaseYear;
        this.dateWhenAdded = dateWhenAdded;
    }
    renderProduct() {
        const productList = document.querySelector('#product-list');
        productList.innerHTML += `
            <li class="product">
                <div id="phoneData"> 
                    <p>Name: ${this.name}</p>
                    <p>Price: ${this.price}</p>
                    <p>Release Year: ${this.releaseYear}</p>
                    <p>Date when added: ${this.dateWhenAdded}</p>
                    <img src="phone.png" alt="phone" height="100" width="100">
                </div>
                <div id="removeItemButtonID">
                    <button id="removeItemButton">Delete (Not Working)</button>
                </div>
            </li>
        `;
    }
}

// const entireList = document.querySelector("#product-list");
// const listElement = document.querySelector(".product");
// listElement.appendChild(entireList);
// let removeItem = document.querySelector("RemoveItemButton");
// removeItem.addEventListener("click", (event) => {
//     listElement.removeChild(listElement.parentNode);
// });