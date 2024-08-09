// Add any interactivity or dynamic features here
document.addEventListener('DOMContentLoaded', function () {
    // Example: Scroll to section smoothly
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
