// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close Mobile Menu on Link Click
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scroll for Anchor Links (Optional, CSS often handles this but JS is safer for old browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Scroll Animation (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.program-card, .feature-item, .gallery-item, .testimonial-card').forEach(el => {
    el.classList.add('fade-in-up'); // Re-use CSS animation class logic if preferred or add specific opacity 0 start
    // For now, let's keep it simple. If we want scroll animations, we might add opacity: 0 to these elements in CSS and set forwards on animation
});

// Form Submission (Demo)
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    form.reset();
});
