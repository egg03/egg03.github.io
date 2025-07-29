document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navMenu = document.getElementById('nav-menu');

    // Mobile menu toggle functionality
    if (mobileMenuButton && navMenu) {
        console.log('Mobile menu elements found:', { mobileMenuButton, navMenu });

        mobileMenuButton.addEventListener('click', () => {
            console.log('Hamburger menu clicked!');
            console.log('Before toggle - navMenu classes:', navMenu.classList);

            navMenu.classList.toggle('hidden'); // Toggles display: none / block
            navMenu.classList.toggle('flex');  // Toggles display: flex
            navMenu.classList.toggle('flex-col'); // Ensures vertical stacking

            console.log('After toggle - navMenu classes:', navMenu.classList);
        });

        // Close the mobile menu when a navigation link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Check if the menu is currently visible and on a mobile screen
                // Use window.matchMedia for more reliable breakpoint checking if needed,
                // but window.innerWidth < 768 is fine for simple cases.
                if (!navMenu.classList.contains('hidden') && window.innerWidth < 768) {
                    console.log('Nav link clicked, closing mobile menu.');
                    navMenu.classList.add('hidden');
                    navMenu.classList.remove('flex');
                    navMenu.classList.remove('flex-col');
                }
            });
        });
    } else {
        console.error('Mobile menu button or navigation menu not found!');
    }
});
