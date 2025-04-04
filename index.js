// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        // Prevent default anchor click behavior
        e.preventDefault();

        // Get the target section
        const targetId = this.getAttribute('href').replace('.html', '');
        const targetSection = document.querySelector(targetId);

        // Scroll to the target section if it exists
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            // Redirect to the page if the section is not on the current page
            window.location.href = this.getAttribute('href');
        }
    });
});

// Alert for "Explore More" button
const exploreButton = document.querySelector('.explore-button');
if (exploreButton) {
    exploreButton.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Explore More feature coming soon!');
    });

    // Add hover effect using transform
    exploreButton.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s';
    });

    exploreButton.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });
}
// Toggle sidebar visibility
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});