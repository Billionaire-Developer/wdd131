// Smooth scroll to the "Products" section when the hero button is clicked
document.querySelector('.hero button').addEventListener('click', () => {
    const productsSection = document.querySelector('#products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Products section not found!');
    }
});
