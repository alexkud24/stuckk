let cart = [];

function addToCart(tshirt) {
    let index = cart.findIndex(item => item.name === tshirt.name);
    if (index > -1) {
      cart[index].quantity++;
    } else {
      cart.push({ name: tshirt.name, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
   }
   function removeFromCart(name) {
    let index = cart.findIndex(item => item.name === name);
    if (index > -1) {
      cart[index].quantity--;
      if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
  }
 function updateCart() {
    let cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';
    for (let i = 0; i < cart.length; i++) {
      let tshirtElement = document.createElement('p');
      tshirtElement.textContent = cart[i].name + ' x' + cart[i].quantity;
      cartItemsElement.appendChild(tshirtElement);
    }
   }
window.onload = function() {
    let savedCart = localStorage.getItem('cart');
    if (savedCart) {
     cart = JSON.parse(savedCart);
     updateCart();
    }
   }