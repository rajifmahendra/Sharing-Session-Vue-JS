// Link Refrensi 
// https://www.w3schools.com/js/default.asp
// https://fakestoreapi.com/docs

let products = [];
let itemsPerPage = 10;
let currentItems = 0;

async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        products = await response.json();
        console.log(products)
        loadMore();
        document.getElementById("load-more-button").addEventListener("click", loadMore);
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener("readystatechange", () => {
    if (document.readyState === 'complete') {
        fetchProducts();
    }
});

function loadMore() {
    const tableBody = document.getElementById("table_body");
    const nextItems = products.slice(currentItems, currentItems + itemsPerPage);
    nextItems.forEach((product, index) => {
        console.log(product)
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${currentItems + index + 1}</td>
            <td>${product.title}</td>
            <td>$${product.price}</td>
            <td id="product_${currentItems + index}" onclick="seeMore(${currentItems + index})" class="text-wrap" title="${product.description}">${limitString(product.description)}</td>
            <td>${product.category}</td>
            <td>${product.rating.rate} (${product.rating.count})</td>
        `;
        tableBody.appendChild(row);
    });

    // currentItems = currentItems+itemsPerPage == currentItems += itemsPerPage;
    currentItems += itemsPerPage;

    if (currentItems >= products.length) {
        document.getElementById("load-more-button").style.display = 'none';
    }
}

function limitString(str) {
    if (str.length > 20) {
        str = str.substring(0, 20) + '...';
    }
    return str;
}

function seeMore(index) {
    const row = document.getElementById(`product_${index}`);
    const text = row.getAttribute('title');
    if (row.innerHTML.length == 23){
        row.innerHTML = text;
    }else{
        row.innerHTML = limitString(text)
    }
}
