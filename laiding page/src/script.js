 let menu = document.querySelector('#menu-icon');
 let navbar = document.querySelector('#navbar');

 menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
 }

 function toggleSubmenu() {
    var submenu = document.getElementById("submenu");

     
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
}

const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

 
function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    showImage(currentIndex);
}
setInterval(nextImage, 3000);

let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPriceElement = document.getElementById('total-price');
    
    cartItems.innerHTML = '';
    totalPrice = 0;
    
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.name} (R$${item.price}) x ${item.quantity}</p>
            <button onclick="removeFromCart('${item.name}')">Remover</button>
        `;
        cartItems.appendChild(cartItem);
    });

    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCart();
}

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('open');
}

