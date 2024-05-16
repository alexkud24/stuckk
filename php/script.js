let cart = {};

function addToCart(tshirt) {
    if (cart[tshirt.name]) {
        cart[tshirt.name]++;
    } else {
        cart[tshirt.name] = 1;
    }
    updateCart();
}

function removeFromCart(name) {
    if (cart[name]) {
        cart[name]--;
        if (cart[name] <= 0) {
            delete cart[name];
        }
    }
    updateCart();
}

function updateCart() {
    let cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';
    for (let name in cart) {
        let tshirtElement = document.createElement('p');
        tshirtElement.textContent = `${name} x${cart[name]}`;
        cartItemsElement.appendChild(tshirtElement);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let loginBtn = document.getElementById('loginBtn');
    let loginPanel = document.getElementById('loginPanel');
    let loginForm = document.getElementById('form');

    loginBtn.addEventListener('click', function() {
        if (loginPanel.style.display === 'none' || loginPanel.style.display === '') {
            loginPanel.style.display = 'block';
        } else {
            loginPanel.style.display = 'none';
        }
    });

    loginForm.addEventListener('submit', function(event) {
        let mail = loginForm.elements['mail'].value;
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(mail)) {
            alert('Пожалуйста, введите корректный адрес электронной почты.');
            event.preventDefault();
            return;
        }
    });
});