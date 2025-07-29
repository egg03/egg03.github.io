document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navMenu = document.getElementById('nav-menu');

    // Mobile menu toggle functionality
    if (mobileMenuButton && navMenu) {
        console.log('Mobile menu elements found:', { mobileMenuButton, navMenu });

        mobileMenuButton.addEventListener('click', () => {
            console.log('Hamburger menu clicked!');
            console.log('Before toggle - navMenu classes:', navMenu.classList);

            // Toggle custom classes for mobile navigation
            navMenu.classList.toggle('mobile-nav-closed');
            navMenu.classList.toggle('mobile-nav-open');

            console.log('After toggle - navMenu classes:', navMenu.classList);
        });

        // Close the mobile menu when a navigation link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Only hide if it's currently visible and on a mobile screen
                if (navMenu.classList.contains('mobile-nav-open') && window.innerWidth < 768) {
                    console.log('Nav link clicked, closing mobile menu.');
                    navMenu.classList.remove('mobile-nav-open');
                    navMenu.classList.add('mobile-nav-closed');
                }
            });
        });
    } else {
        console.error('Mobile menu button or navigation menu not found!');
    }
});
