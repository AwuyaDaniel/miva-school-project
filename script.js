// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";
    }
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Countdown Timer
function updateCountdown() {
    const countDownDate = new Date("Nov 29, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (document.getElementById("days")) {
        document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }

    if (distance < 0) {
        clearInterval(countdownFunction);
        if (document.getElementById("days")) {
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
        }
    }
}

const countdownFunction = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Form Submission
const appointmentForm = document.getElementById("appointment-form");
if (appointmentForm) {
    appointmentForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for your appointment request! We will contact you shortly to confirm your booking.");
        this.reset();
    });
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for your message! We will respond to your inquiry within 24 hours.");
        this.reset();
    });
}

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    // Check for saved theme preference or prefer-color-scheme
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = localStorage.getItem("theme");
    
    // Set initial theme
    if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
        document.body.classList.add("dark-theme");
        themeToggle.textContent = "☀️";
    } else {
        document.body.classList.remove("dark-theme");
        themeToggle.textContent = "🌙";
    }
    
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");
        
        if (document.body.classList.contains("dark-theme")) {
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });
}

// Apply theme on page load (for all pages)
document.addEventListener("DOMContentLoaded", function() {
    const currentTheme = localStorage.getItem("theme");
    const themeToggle = document.getElementById("theme-toggle");
    
    if (currentTheme === "dark") {
        document.body.classList.add("dark-theme");
        if (themeToggle) {
            themeToggle.textContent = "☀️";
        }
    } else {
        document.body.classList.remove("dark-theme");
        if (themeToggle) {
            themeToggle.textContent = "🌙";
        }
    }
});

// Welcome Popup - Only on homepage
if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
    window.addEventListener("load", function() {
        setTimeout(function() {
            alert("Welcome to GROUP-F-PROJECT - Where Elegance is Redefined!");
        }, 1000);
    });
}

// DOM Structure Explanation
console.log("DOM Structure for GROUP-F-PROJECT Website:");
console.log("Root: <html>");
console.log("  ├── <head> (metadata, title, styles)");
console.log("  └── <body>");
console.log("      ├── <header> (logo, navigation)");
console.log("      ├── <div.marquee-container> (scrolling announcements)");
console.log("      ├── <div.container> (main content area)");
console.log("      │   ├── Various sections based on page content");
console.log("      │   └── Product grids, forms, etc.");
console.log("      ├── <footer> (site information, links)");
console.log("      └── <button.theme-toggle> (dark/light mode)");