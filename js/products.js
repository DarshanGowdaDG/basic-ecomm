// Sample product data (in a real app, this would come from a database)
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format",
        description: "High-quality wireless headphones with noise cancellation"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format",
        description: "Feature-rich smartwatch with health tracking"
    },
    {
        id: 3,
        name: "Digital Camera",
        price: 499.99,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format",
        description: "Professional digital camera with 4K video capability"
    },
    {
        id: 4,
        name: "Laptop",
        price: 999.99,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format",
        description: "Powerful laptop for work and entertainment"
    },
    {
        id: 5,
        name: "Smartphone",
        price: 699.99,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format",
        description: "Latest smartphone with advanced camera features"
    },
    {
        id: 6,
        name: "Tablet",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=500&auto=format",
        description: "Versatile tablet for productivity and entertainment"
    }
];

// Display products in the grid
function showProducts() {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = `
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold">${product.name}</h3>
                    <p class="text-gray-600 text-sm mt-1">${product.description}</p>
                    <div class="flex justify-between items-center mt-4">
                        <span class="text-lg font-bold">$${product.price}</span>
                        <button 
                            onclick="addToCart(${product.id})"
                            class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.innerHTML += productCard;
    });
}

// Initialize products when page loads
document.addEventListener('DOMContentLoaded', () => {
    showProducts();
});
