window.addEventListener("DOMContentLoaded", function (e){
    //retrieve data order data from local storage
    let orderSummary = JSON.parse(localStorage.getItem("order"));
    let orderArr = [];
    orderArr[0] = orderSummary;

    //generate order summary section on the checkout page
    orderArr.forEach((product) => {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", product._id);
        newDiv.setAttribute("class", "checkout_cards");

        const newImage = document.createElement("img");
        newImage.setAttribute("src", product.img);

        const newTitle = document.createElement("h2");
        newTitle.innerHTML = `${product.title}`;

        const newPrice = document.createElement("p");
        newPrice.innerHTML = `${product.price}`;

        const newQuantity = document.createElement("p");
        newQuantity.innerHTML = "Quantity: 1";

        const newTotal = document.createElement("p");
        let total, i, j, temp = product.price, new_price = "";
        for (i = 0; i < temp.length; i++) {
            for (j = 0; j < 10; j++){
                if (Number(temp[i]) === j){
                    new_price = new_price.concat(temp[i].toString());
                }
            }
        }
        total = Number(new_price) * Number(newQuantity.innerHTML);
        newTotal.innerHTML = `<br><strong>Order Total: Ksh. ${total}</strong>`;

        newDiv.appendChild(newImage);
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newQuantity);
        newDiv.appendChild(newPrice);
        newDiv.appendChild(newTotal);

        const parentDiv = document.querySelector(".products");
        parentDiv.appendChild(newDiv);
    })
})
//collect form data for processing
const completeOrderButton = document.getElementById("complete-order");

//customer object
const customer = {
    fullName: "name",
    address: "address",
    card: {
        card_no: "number",
        exp: "date",
        cvv: "cvv"
    }
}


