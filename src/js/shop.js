// js code for the shop products page
//page contains a list of demo products

// sample products data in json format
//const raw_product = require('./products.json'); //require needs webpack or browserify setup
const raw_product = [
    {
        "_id": "6108186780da980fef38663d",
        "title": "A",
        "price": "3,313.17",
        "img": "http://placehold.it/150x150"
    },
    {
        "_id": "61081867707cf3ff903b3fa7",
        "title": "A",
        "price": "3,416.48",
        "img": "http://placehold.it/150x150"
    },
    {
        "_id": "610818673edc73b890a034fa",
        "title": "A",
        "price": "1,567.06",
        "img": "http://placehold.it/150x150"
    },
    {
        "_id": "61081867fee88f375bbfb4c4",
        "title": "N",
        "price": "2,513.16",
        "img": "http://placehold.it/150x150"
    },
    {
        "_id": "6108186713144f24e784e21e",
        "title": "C",
        "price": "3,115.62",
        "img": "http://placehold.it/150x150"
    },
    {
        "_id": "61081867b7b0500942f35a2f",
        "title": "E",
        "price": "3,227.45",
        "img": "http://placehold.it/150x150"
    },
    {
        "_id": "61081867c37187672f2265cc",
        "title": "M",
        "price": "1,630.10",
        "img": "http://placehold.it/150x150"
    },
    {
        "_id": "610818674046799e6f6381e2",
        "title": "A",
        "price": "1,307.80",
        "img": "http://placehold.it/150x150"
    },
    {
        "_id": "61081867e867c4890fabf712",
        "title": "A",
        "price": "3,608.33",
        "img": "http://placehold.it/150x150"
    }
]

//the products are dynamically rendered to the shop.html page
//createProduct function creates a product div

window.addEventListener("DOMContentLoaded", function(e){
    raw_product.forEach((product) => {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", product._id);
        newDiv.setAttribute("class", "cards");

        const newImage = document.createElement("img");
        newImage.setAttribute("src", product.img);

        const newTitle = document.createElement("h3");
        newTitle.innerHTML = `${product.title}`;

        const newPrice = document.createElement("p");
        newPrice.innerHTML = `Ksh. ${product.price}`;

        const orderButton = document.createElement("button");
        orderButton.setAttribute("id", "to-order");
        orderButton.setAttribute("class", "to-shop");
        orderButton.innerHTML = "Order Now";

        newDiv.appendChild(newImage);
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newPrice);
        newDiv.appendChild(orderButton);

        const parentDiv = document.querySelector(".products");
        parentDiv.appendChild(newDiv);
    })

    //redirect user from products page to checkout form
    const orderNow = document.querySelector("#to-order");

    orderNow.addEventListener("click", function(e){
        //construct and order object using the local-storage api
        //order object { id, name, price, img-url }
        const productContainer = orderNow.parentNode;
        const productId = productContainer.getAttribute("id");

        if (productId){
            const order = {
                id: productId,
                title: productContainer.childNodes[1].innerHTML,
                price: productContainer.childNodes[2].innerHTML,
                img: productContainer.childNodes[0].getAttribute("src")
            }
            //store order details temporarily with localStorage api
            localStorage.setItem("order", JSON.stringify(order));
        }
        //redirects user to checkout form on click
        window.location.href = window.location.href.replace("shop.html", "checkout.html");
    })
});
