// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple Form Submission Handling (replace with actual submission logic)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted! (Replace this with your actual form handling logic)');
    // Here you would typically send the form data to a server using AJAX or fetch API
});