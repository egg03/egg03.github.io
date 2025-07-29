document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navMenu = document.getElementById('nav-menu');

    // Mobile menu toggle functionality
    if (mobileMenuButton && navMenu) {
        console.log('Mobile menu elements found:', { mobileMenuButton, navMenu });

        mobileMenuButton.addEventListener('click', () => {
            console.log('Hamburger menu clicked!');
            console.log('Before toggle - navMenu classes:', navMenu.classList);

            // Toggle the custom 'mobile-nav-visible' class
            navMenu.classList.toggle('mobile-nav-visible');

            console.log('After toggle - navMenu classes:', navMenu.classList);
        });

        // Close the mobile menu when a navigation link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Only hide if it's currently visible and on a mobile screen
                // Check if the menu has the 'mobile-nav-visible' class AND the screen width is less than md breakpoint (768px)
                if (navMenu.classList.contains('mobile-nav-visible') && window.innerWidth < 768) {
                    console.log('Nav link clicked, closing mobile menu.');
                    navMenu.classList.remove('mobile-nav-visible'); // Hide the menu
                }
            });
        });
    } else {
        console.error('Mobile menu button or navigation menu not found!');
    }
});
