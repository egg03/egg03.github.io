document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navMenu = document.getElementById('nav-menu');

    // Mobile menu toggle functionality
    if (mobileMenuButton && navMenu) {
        console.log('Mobile menu elements found:', { mobileMenuButton, navMenu });

        mobileMenuButton.addEventListener('click', () => {
            console.log('Hamburger menu clicked!');
            console.log('Before toggle - navMenu classes:', navMenu.classList);

            // Simply toggle the 'hidden' class.
            // Tailwind's 'md:flex' will ensure it's always visible on larger screens.
            navMenu.classList.toggle('hidden');

            console.log('After toggle - navMenu classes:', navMenu.classList);
        });

        // Close the mobile menu when a navigation link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Only hide if it's currently visible and on a mobile screen
                // Check if the menu is not hidden AND the screen width is less than md breakpoint (768px)
                if (!navMenu.classList.contains('hidden') && window.innerWidth < 768) {
                    console.log('Nav link clicked, closing mobile menu.');
                    navMenu.classList.add('hidden'); // Hide the menu
                }
            });
        });
    } else {
        console.error('Mobile menu button or navigation menu not found!');
    }
});
