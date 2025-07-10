// Cart state
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count badge
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push({
            ...product,
            quantity: 1
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification('Item added to cart!');
    }
}

// Remove item from cart
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCart();
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Toggle cart sidebar
function toggleCart() {
    const cart = document.getElementById('shopping-cart');
    cart.classList.toggle('hidden');
    if (!cart.classList.contains('hidden')) {
        displayCart();
    }
}

// Display cart items
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItem = `
            <div class="flex items-center space-x-4 p-2 border-b">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                <div class="flex-1">
                    <h4 class="font-semibold">${item.name}</h4>
                    <p class="text-gray-600">$${item.price}</p>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItems.innerHTML += cartItem;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    // In a real application, this would connect to a payment processor
    showNotification('Order placed successfully!');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
    toggleCart();
}

// Initialize cart when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});
