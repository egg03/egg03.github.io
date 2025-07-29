document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navMenu = document.getElementById('nav-menu');

    // Mobile menu toggle functionality
    if (mobileMenuButton && navMenu) {
        console.log('Mobile menu elements found:', { mobileMenuButton, navMenu });

        mobileMenuButton.addEventListener('click', () => {
            console.log('Hamburger menu clicked!');
            console.log('Before toggle - navMenu classes:', navMenu.classList);

            // Toggle Tailwind's 'hidden' class to control display: none
            navMenu.classList.toggle('hidden');
            // Toggle our custom 'mobile-nav-active' class to apply flexbox styles
            navMenu.classList.toggle('mobile-nav-active');

            console.log('After toggle - navMenu classes:', navMenu.classList);
        });

        // Close the mobile menu when a navigation link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Only hide if it's currently visible and on a mobile screen
                if (!navMenu.classList.contains('hidden') && window.innerWidth < 768) {
                    console.log('Nav link clicked, closing mobile menu.');
                    navMenu.classList.add('hidden');
                    navMenu.classList.remove('mobile-nav-active'); // Remove custom active class
                }
            });
        });
    } else {
        console.error('Mobile menu button or navigation menu not found!');
    }
});
