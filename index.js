// NAVBAR TOGGLE
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// SLIDER FUNCTIONALITY
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

prev.addEventListener("click", () => {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

next.addEventListener("click", () => {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  showSlide(currentSlide);
});

// AUTO SLIDE
setInterval(() => {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  showSlide(currentSlide);
}, 5000);
