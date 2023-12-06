// Execute the function when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    
    // Select all elements with the class 'add-to-cart-btn'
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

    // Iterate through each 'add-to-cart' button
    addToCartButtons.forEach(function (button) {
        
        // Add a click event listener to each button
        button.addEventListener("click", function () {
            
            // Find the product name associated with the clicked button
            const productName = button.parentElement.querySelector("h3").innerText;
            
            // Call the addToCart function with the product name
            addToCart(productName);
        });
    });

    // Function to simulate adding a product to the cart
    function addToCart(productName) {
        // Display an alert indicating the product has been added to the cart
        alert(`Added ${productName} to the cart!`);
    }
});


