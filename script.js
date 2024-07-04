document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('.season-section');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateColors() {
        let scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                const sectionColor = section.getAttribute('data-color');
                header.style.backgroundColor = `rgba(${parseInt(sectionColor.slice(1, 3), 16)}, ${parseInt(sectionColor.slice(3, 5), 16)}, ${parseInt(sectionColor.slice(5, 7), 16)}, 0.8)`;
                section.style.backgroundColor = sectionColor;
            }
        });
    }

    window.addEventListener('scroll', updateColors);

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    updateColors();
});
