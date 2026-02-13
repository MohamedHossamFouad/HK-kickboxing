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

// Scroll reveal with stagger (Intersection Observer)
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const revealGroups = [
    '.program-card',
    '.feature-item',
    '.gallery-item',
    '.testimonial-card',
    '.about-text',
    '.about-image',
    '.schedule-card',
    '.contact-info',
    '.contact-form'
];

revealGroups.forEach(selector => {
    const items = document.querySelectorAll(selector);
    items.forEach((el, index) => {
        el.classList.add('reveal');
        const delay = Math.min(index * 0.08, 0.4);
        el.style.setProperty('--delay', `${delay}s`);
        observer.observe(el);
    });
});

// Section title reveal
document.querySelectorAll('.section-title').forEach((el, index) => {
    el.classList.add('reveal');
    el.style.setProperty('--delay', `${Math.min(index * 0.06, 0.3)}s`);
    observer.observe(el);
});

// Form Submission (Demo)
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    form.reset();
});
