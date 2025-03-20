let carousel = document.getElementById("featuredItemsCarousel");
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

document.querySelector(".reservation-form").addEventListener("submit", function (event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let date = document.getElementById("date").value;
    
    if (!name || !email || !date) {
        alert("Please fill in all required fields.");
        event.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".menu-category-btn").forEach(button => {
        button.addEventListener("click", function () {
            document.querySelectorAll(".menu-category").forEach(section => {
                section.classList.add("d-none");
            });
            document.getElementById(this.dataset.category).classList.remove("d-none");
        });
    });
});
