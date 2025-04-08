// Intersection Observer for Carousel
let carousel = document.getElementById("featuredItemsCarousel");
if (carousel) {
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                carousel.classList.add("carousel-running");
            } else {
                carousel.classList.remove("carousel-running");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(carousel);
}

// Form Validation for Reservation Form
let reservationForm = document.querySelector(".reservation-form");
if (reservationForm) {
    reservationForm.addEventListener("submit", function (event) {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let date = document.getElementById("date").value;

        if (!name || !email || !date) {
            alert("Please fill in all required fields.");
            event.preventDefault();
        }
    });
}

// Menu Category Toggle
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".menu-category-btn").forEach(button => {
        button.addEventListener("click", function () {
            document.querySelectorAll(".menu-category").forEach(section => {
                section.classList.add("d-none");
            });
            let targetCategory = document.getElementById(this.dataset.category);
            if (targetCategory) {
                targetCategory.classList.remove("d-none");
            }
        });
    });
});

// Text-to-Speech Functionality
function speakText() {
    let textElement = document.getElementById("text");
    if (textElement) {
        let text = textElement.innerText;
        let speech = new SpeechSynthesisUtterance(text);
        speech.lang = "en-US"; // Set language
        window.speechSynthesis.speak(speech);
    }
}

// Hide Advertisement
function hideAd() {
    const ad = document.querySelector('.animated-ad');
    if (ad) {
        ad.classList.add('hidden');
    }
}

// Search Menu Functionality
function searchMenu() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const menuItems = document.querySelectorAll(".menu-category .card");

    menuItems.forEach(item => {
        const title = item.querySelector(".card-title").innerText.toLowerCase();
        const description = item.querySelector(".card-text").innerText.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
            item.parentElement.style.display = "block"; // Show matching items
        } else {
            item.parentElement.style.display = "none"; // Hide non-matching items
        }
    });
}

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add items to the cart
function addToCart(itemName, itemPrice) {
    // Add the new item to the cart
    cart.push({ name: itemName, price: itemPrice });

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the cart count
    updateCartCount();

    // Notify the user
    alert(`${itemName} has been added to your cart!`);
}

// Function to update the cart count
function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    if (cartCount) {
        cartCount.innerText = cart.length; // Update the cart count
    }
}

// Call updateCartCount when the page loads
document.addEventListener("DOMContentLoaded", updateCartCount);

// Function to clear the cart
function clearCart() {
    if (confirm("Are you sure you want to clear your cart?")) {
        localStorage.removeItem("cart"); // Clear the cart
        updateCartCount(); // Update the cart count
        alert("Your cart has been cleared!");
    }
}

// Function to display cart items (for cart.html)
function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItems = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");

    // Clear the cart display
    cartItems.innerHTML = "";

    // Calculate total price
    let totalPrice = 0;

    // Display each item in the cart
    cart.forEach((item, index) => {
        totalPrice += item.price;
        cartItems.innerHTML += `
            <div class="d-flex justify-content-between align-items-center mb-3 p-3 border rounded bg-white shadow-sm">
                <span class="fw-bold">${item.name}</span>
                <span class="text-success">$${item.price.toFixed(2)}</span>
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    // Update total price
    totalPriceElement.innerText = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
    displayCart(); // Refresh the cart display
}

// Function to handle checkout
function checkout() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Thank you for your purchase!");
    localStorage.removeItem("cart"); // Clear the cart
    displayCart(); // Refresh the cart display
}

