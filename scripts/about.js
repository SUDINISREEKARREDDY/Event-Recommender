document.addEventListener('DOMContentLoaded', () => {
    // Note: Your custom navbar structure doesn't use the .main-header or .nav-toggle classes
    // provided in the previous solution, so the mobile navigation toggle code
    // from the previous script.js is not relevant for your new navbar structure.
    // If you want a mobile toggle for your new .nav structure, you'd need to add
    // a hamburger icon and corresponding JS to toggle the visibility of .middle and .right sections.

    // Added: Subtle delay for hero content to fade in
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = 0;
        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease-out';
            heroContent.style.opacity = 1;
        }, 300); // 300ms delay before it starts fading in
    }

    // Scroll Reveal Animation
    const sections = document.querySelectorAll('section.reveal-on-scroll');

    const observerOptions = {
        root: null, // viewport as root
        rootMargin: '0px',
        threshold: 0.15 // Modified: Trigger when a bit more of the element is visible (15%)
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});