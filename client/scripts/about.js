document.addEventListener('DOMContentLoaded', () => {

    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = 0;
        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease-out';
            heroContent.style.opacity = 1;
        }, 300);
    }

    const sections = document.querySelectorAll('section.reveal-on-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});