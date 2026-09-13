window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.anim-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 1.5) {
            section.classList.add('show');
        }
    });
});