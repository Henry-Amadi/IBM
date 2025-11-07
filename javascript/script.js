const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
// quote
let currentIndex = 0;
const quotes = document.querySelectorAll(".quote");
const slideInterval = 5000; // Change quote every 5 seconds

function changeQuote(direction = 1) {
  quotes[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + direction + quotes.length) % quotes.length;
  quotes[currentIndex].classList.add("active");
}

// Automatically change quotes
setInterval(() => {
  changeQuote(1); // Move to the next quote
}, slideInterval);
