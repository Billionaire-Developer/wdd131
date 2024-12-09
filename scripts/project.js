// Array to hold product data
const products = [
    { name: 'Eco Tote', price: '$25', image: 'bkg-Tote-bag.webp' },
    { name: 'Canvas Tote', price: '$30', image: 'canvas-tote.jpg' },
    { name: 'Leather Tote', price: '$40', image: 'leather-tote.jpg' },
];

// Add products dynamically to the Products page
window.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-list');
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="addToCart(${JSON.stringify(product)})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });

    // Add to Cart function
    window.addToCart = function(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    };
});

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for your message, we will get back to you soon!');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
