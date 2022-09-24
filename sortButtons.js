root.innerHTML += `
    <div id="buttonContainer">
    <button id="sort-by-price">Sort by price</button>
    <button id="sort-by-releaseYear">Sort by Release Year </button>
    <button id="sort-by-dateWhenAdded">Sort by Date When Added </button>
    <button id="filterButton">Filter List</button>
    </div>
`;

function filterPhones(){
    var localStorageProducts = getProducts();
    let filteredProducts = localStorageProducts.filter(elem => Number(elem.price) >= 4000);
    setProducts(filteredProducts);
    renderProductList(filteredProducts);
}

function sortPhones(sortType) {
    switch(sortType) {
        case "SORT_BY_PRICE":
            var localStorageProducts = getProducts();
            var sortedArray = localStorageProducts.sort((elem1, elem2) => {
                if (elem1.price < elem2.price) {
                    return -1;
                } else if (elem1.price > elem2.price) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArray);
            renderProductList(sortedArray);
            break;

        case "SORT-BY-RELEASEYEAR":
            var localStorageProducts = getProducts();
            var sortedArray = localStorageProducts.sort((elem1, elem2) => {
                if(elem1.releaseYear < elem2.releaseYear){
                    return -1;
                }else if(elem1.releaseYear > elem2.releaseYear){
                    return 1;
                } else{
                    return 0;
                }
            });
            setProducts(sortedArray);
            renderProductList(sortedArray);
            break;

        case "SORT-BY-DATEWHENADDED":
            var localStorageProducts = getProducts();
            var sortedArray = localStorageProducts.sort((elem1, elem2) => {
                if(new Date(elem1.dateWhenAdded) < new Date(elem2.dateWhenAdded)){
                    return -1;
                }else if(new Date(elem1.dateWhenAdded) > new Date(elem2.dateWhenAdded)){
                    return 1;
                } else{
                    return 0;
                }
            });
            setProducts(sortedArray);
            renderProductList(sortedArray);
            break;
    }
}

function addSortingFunctionality() {
    const sortByPrice = document.querySelector('#sort-by-price');
    const sortByReleaseYear = document.querySelector("#sort-by-releaseYear");
    const sortByDateWhenAdded = document.querySelector("#sort-by-dateWhenAdded");
    const filterButton = document.querySelector("#filterButton");

    filterButton.addEventListener("click", function(){
        filterPhones();
    })
    
    sortByPrice.addEventListener('click', function() {
        sortPhones('SORT_BY_PRICE');
    })
    
    sortByReleaseYear.addEventListener('click', function() {
        sortPhones('SORT-BY-RELEASEYEAR');
    })

    sortByDateWhenAdded.addEventListener('click', function() {
        sortPhones('SORT-BY-DATEWHENADDED');
    })

}

window.addEventListener('load', addSortingFunctionality);