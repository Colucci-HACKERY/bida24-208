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

function hideAd() {
    const ad = document.querySelector('.animated-ad');
    if (ad) {
        ad.classList.add('hidden');
    }
}

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
