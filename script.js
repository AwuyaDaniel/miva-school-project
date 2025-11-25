// Slideshow functionality
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return; // Exit if no slides found
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Initialize slideshow only if slides exist
document.addEventListener("DOMContentLoaded", function() {
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length > 0) {
        showSlides();
    }
});

// Countdown Timer - Fixed to count to Winter Collection Launch
function updateCountdown() {
    // Set to November 15, 2024 for Winter Collection Launch
    const countDownDate = new Date("Nov 30, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update display with safety checks
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (daysElement) daysElement.textContent = days < 10 ? "0" + days : days;
    if (hoursElement) hoursElement.textContent = hours < 10 ? "0" + hours : hours;
    if (minutesElement) minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
    if (secondsElement) secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;

    // Handle countdown completion
    if (distance < 0) {
        clearInterval(countdownInterval);
        if (daysElement) daysElement.textContent = "00";
        if (hoursElement) hoursElement.textContent = "00";
        if (minutesElement) minutesElement.textContent = "00";
        if (secondsElement) secondsElement.textContent = "00";
        
        // Update title when countdown finishes
        const countdownTitle = document.querySelector('.countdown-title');
        if (countdownTitle) {
            countdownTitle.textContent = "Winter Collection Has Launched!";
        }
    }
}

// Initialize countdown
let countdownInterval;
document.addEventListener("DOMContentLoaded", function() {
    // Only start countdown if elements exist
    if (document.getElementById("days")) {
        countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call
    }
});

// Form Submission
document.addEventListener("DOMContentLoaded", function() {
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
});

// Theme Toggle with Persistent State
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        // Check for saved theme preference or prefer-color-scheme
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        const currentTheme = localStorage.getItem("theme");
        
        // Set initial theme immediately to prevent flash
        if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
            document.body.classList.add("dark-theme");
            themeToggle.textContent = "☀️";
        } else {
            document.body.classList.remove("dark-theme");
            themeToggle.textContent = "🌙";
        }
        
        // Theme toggle functionality
        themeToggle.addEventListener("click", function() {
            const isDark = document.body.classList.toggle("dark-theme");
            
            if (isDark) {
                themeToggle.textContent = "☀️";
                localStorage.setItem("theme", "dark");
            } else {
                themeToggle.textContent = "🌙";
                localStorage.setItem("theme", "light");
            }
        });
    }
});

// Welcome Popup - Only on homepage
document.addEventListener("DOMContentLoaded", function() {
    const isHomepage = window.location.pathname.endsWith('index.html') || 
                      window.location.pathname.endsWith('/') || 
                      window.location.pathname === '';
    
    if (isHomepage) {
        setTimeout(function() {
            alert("Welcome to Riyo Secrets - Where Elegance is Redefined!");
        }, 1000);
    }
});

// Smooth scrolling for navigation
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// DOM Structure Explanation
console.log("DOM Structure for Riyo Secrets Website:");
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