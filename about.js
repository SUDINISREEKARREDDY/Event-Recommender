document.addEventListener('DOMContentLoaded', () => {
    // Note: Your custom navbar structure doesn't use the .main-header or .nav-toggle classes
    // provided in the previous solution, so the mobile navigation toggle code
    // from the previous script.js is not relevant for your new navbar structure.
    // If you want a mobile toggle for your new .nav structure, you'd need to add
    // a hamburger icon and corresponding JS to toggle the visibility of .middle and .right sections.

    // Scroll Reveal Animation
    const sections = document.querySelectorAll('section.reveal-on-scroll');

    const observerOptions = {
        root: null, // viewport as root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
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