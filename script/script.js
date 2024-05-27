const navItems = document.querySelectorAll('.nav-item');
console.log(navItems);
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        navItems.forEach(nav => nav.classList.remove('text-black'));
        // Add active class to the clicked item
        item.classList.add('text-black');
    });
});
