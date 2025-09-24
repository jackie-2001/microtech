// Function to show the selected section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';

        // Ensure products filtering works when switching to Products section
        if (sectionId === 'products') {
            filterCategory('all'); // Reset to show all products
        }
    } else {
        console.error(`Section with ID '${sectionId}' not found.`);
    }

    // Hide .sub-content when not on 'home'
    const subContent = document.querySelector('.sub-content');
    if (subContent) {
        subContent.style.display = sectionId === 'home' ? 'block' : 'none';
    }

    // Hide .subsub-content when not on 'home'
    const subSubContent = document.querySelector('.subsub-content');
    if (subSubContent) {
        subSubContent.style.display = sectionId === 'home' ? 'block' : 'none';
    }

    // Update the active class in navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') === `showSection('${sectionId}')`) {
            link.classList.add('active');
        }
    });
}

// Ensure the home section is shown on page load
window.onload = function () {
    showSection('home'); // Default section
};

// Function to filter products by category
function filterCategory(category) {
    let items = document.querySelectorAll('.products-item');
    let buttons = document.querySelectorAll('.category-button');

    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    let clickedButton = document.querySelector(`.category-button[data-category="${category}"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    // Show all items if 'all' is selected, otherwise filter
    items.forEach(item => {
        item.style.display = category === 'all' || item.classList.contains(category) ? 'block' : 'none';
    });
}

// Wait for the DOM to load before adding the event listener
document.addEventListener("DOMContentLoaded", function () {
    // Get the "View Our Services" button
    const viewServicesBtn = document.querySelector(".view-services-btn");

    // Add click event listener
    if (viewServicesBtn) {
        viewServicesBtn.addEventListener("click", function () {
            showSection("services"); // Ensure your services section has id="service"
        });
    }
});
