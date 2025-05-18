// Sticky Navigation
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Auto slide change every 5 seconds
setInterval(nextSlide, 5000);

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for fixed navbar
            behavior: 'smooth'
        });
    });
});

// Explore button click event
document.querySelector('.explore-btn').addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});



// Mobile Menu Toggle
const mobileMenuToggle = document.createElement('div');
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('#navbar .container').prepend(mobileMenuToggle);

const nav = document.querySelector('nav');
mobileMenuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    this.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Text Fade-In Animation
function fadeInElements() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements with fade-in effect
function initFadeElements() {
    // Select all elements you want to animate
    const elementsToAnimate = document.querySelectorAll(
        '#about .text-column h2, #about .text-column p, ' +
        '#services h2, .service-card, ' +
        '#features h2, .feature-item, ' +
        '#pricing h2, .pricing-card, ' +
        '#testimonials h2, .testimonial, ' +
        '#contact h2, .contact-form, .map-container'
    );

    // Add fade-in class to each element
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
    });
}

// Run when page loads
window.addEventListener('DOMContentLoaded', () => {
    initFadeElements();
    fadeInElements(); // Run once immediately for elements already in view
});

// Run on scroll
window.addEventListener('scroll', () => {
    fadeInElements();
});