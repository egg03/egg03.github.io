document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', () => {
            navMenu.classList.toggle('hidden'); // Toggle the 'hidden' class
            navMenu.classList.toggle('flex');  // Toggle the 'flex' class to show/hide
            navMenu.classList.toggle('flex-col'); // Ensure it stacks vertically when open
        });

        // Close the mobile menu when a navigation link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Only hide if it's currently visible and on a mobile screen
                if (!navMenu.classList.contains('hidden') && window.innerWidth < 768) {
                    navMenu.classList.add('hidden');
                    navMenu.classList.remove('flex');
                    navMenu.classList.remove('flex-col');
                }
            });
        });
    }
});
