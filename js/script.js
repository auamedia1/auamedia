// Add smooth scrolling to navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add fade-in animation on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Add hover animations to service cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'rotateY(10deg)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'rotateY(0deg)';
    });
});

// Add portfolio gallery image pop-up
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.createElement('div');
const modalImage = document.createElement('img');
modal.classList.add('modal');
modal.appendChild(modalImage);
document.body.appendChild(modal);

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        modalImage.src = image.src;
        modal.style.display = 'flex';
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
