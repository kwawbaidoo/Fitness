// Get all navigation items
const navItems = document.querySelectorAll('.nav-item');

// Add click event listener to each navigation item
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        navItems.forEach(nav => nav.classList.remove('text-black'));
        // Add active class to the clicked item
        item.classList.add('text-black');
    });
});
