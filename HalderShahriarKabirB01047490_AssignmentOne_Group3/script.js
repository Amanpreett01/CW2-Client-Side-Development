let count = localStorage.getItem("cartCount") || 0;

window.onload = function () {
    let cart = document.getElementById("cart-count");
    if (cart) {
        cart.innerText = count;
    }

    let user = localStorage.getItem("loggedInUser");
    let authArea = document.getElementById("authArea");

    if (user && authArea) {
        authArea.innerHTML = 'Hi, ' + user + ' | <a href="#" onclick="logout()">Logout</a>';
    }
};

function addToCart() {
    count++;
    localStorage.setItem("cartCount", count);

    let cart = document.getElementById("cart-count");
    if (cart) {
        cart.innerText = count;
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    location.reload();
}

function addToCart() {
    count++;
    localStorage.setItem("cartCount", count);
    document.getElementById("cart-count").innerText = count;
    alert("Item added to cart!");
}